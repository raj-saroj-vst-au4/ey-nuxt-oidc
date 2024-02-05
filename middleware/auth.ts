export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) {
    return;
  }
  const { $oidc }: any = useNuxtApp();
  if (!$oidc.isLoggedIn) {
    $oidc.login(to.fullPath);
  }
});
