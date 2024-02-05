import type { UseFetchOptions } from "#app";

export async function useAuthFetch<T>(
  path: string,
  options: UseFetchOptions<T> = {}
) {
  let headers: any = {};
  let xsrf_token = useCookie("XSRF-TOKEN").value;
  let session_token = useCookie("eyantraapi_session").value;
  const access_token = useCookie("access_token").value;

  if (!access_token) {
    console.log("No access token");
  }

  if (!xsrf_token || !session_token) {
    console.log("NO session or xsrf token, getting one");
    await $fetch("/api/token", {
      method: "GET",
    });
    xsrf_token = useCookie("XSRF-TOKEN").value;
  }
  return await $fetch(path, {
    ...options,
    headers: {
      "X-XSRF-TOKEN": xsrf_token,
      Authorization: `Bearer ${access_token}`,
      ...headers,
      ...options?.headers,
    },
  });
}
