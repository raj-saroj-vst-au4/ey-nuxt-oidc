import type { UseFetchOptions } from "#app";

export async function useAuthFetch<T>(
  path: string,
  options: UseFetchOptions<T> = {}
) {
  let headers: any = {};
  const { $oidc }: any = useNuxtApp();

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
    $oidc.login("/");
  }

  return await $fetch(path, {
    ...(options as any),
    headers: {
      "X-XSRF-TOKEN": xsrf_token,
      Authorization: `Bearer ${access_token}`,
      ...headers,
      ...options?.headers,
    },
  });
}
