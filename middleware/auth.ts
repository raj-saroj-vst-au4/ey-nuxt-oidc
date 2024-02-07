export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) {
    console.log("Server Side");
    return "server side";
  }
  const { $oidc }: any = useNuxtApp();
  if (!$oidc.isLoggedIn) {
    $oidc.login(to.fullPath);
  }
});
