import type { UseFetchOptions } from "#app";

export async function useAuthFetch<T>(
  path: string,
  options: UseFetchOptions<T> = {}
) {
  let headers: any = {};
  const { $oidc }: any = useNuxtApp();
  const router = useRouter();

  await $fetch("/api/token");
  let xsrf_token = useCookie("XSRF-TOKEN").value;
  let session_token = useCookie("eyantraapi_session").value;
  const access_token = useCookie("access_token").value;

  if (process.server) {
    headers = {
      ...headers,
      ...useRequestHeaders(["referer", "cookie"]),
    };
  }

  if (!access_token) {
    console.log("Missing Access Token");
    const path = window.location.pathname;
    $oidc.login(path);
  }

  try {
    const res = await $fetch(path, {
      ...(options as any),
      headers: {
        "X-XSRF-TOKEN": xsrf_token,
        Authorization: `Bearer ${access_token}`,
        ...headers,
        ...options?.headers,
      },
    });
    return res;
  } catch (err: any) {
    if (err.response && err.response.status === 403) {
      return router.push("/completesignup");
    }
  }
}
