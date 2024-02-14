// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-openid-connect", "@tresjs/nuxt"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  routeRules: {
    "/api/**": {
      proxy: {
        to: `${process.env.NUXT_BACKEND_URL}/api/**`,
      },
    },
    "/logout": {
      redirect: `${process.env.NUXT_OPENID_CONNECT_OP_ISSUER}/protocol/openid-connect/logout?post_logout_redirect_uri=${process.env.NUXT_APP_DOMAIN}&client_id=${process.env.NUXT_OPENID_CONNECT_OP_CLIENT_ID}`,
    },
  },
  openidConnect: {
    addPlugin: true,
    op: {
      issuer: process.env.NUXT_OPENID_CONNECT_OP_ISSUER,
      clientId: process.env.NUXT_OPENID_CONNECT_OP_CLIENT_ID,
      clientSecret: process.env.NUXT_OPENID_CONNECT_OP_CLIENT_SECRET,
      callbackUrl: `${process.env.NUXT_APP_DOMAIN}/oidc/callback`, // optional
      scope: ["email", "profile"],
    },
    config: {
      debug: false, // optional, default is false
      response_type: "code", // or 'code'
      secret: "oidc._sessionid",
      cookie: { loginName: "" },
      cookiePrefix: "",
      cookieEncrypt: true,
      cookieEncryptKey: process.env.NUXT_COOKIE_ENC_KEY, // 32
      cookieEncryptIV: process.env.NUXT_ENC_IV, // 16
      cookieEncryptALGO: "aes-256-cbc",
      cookieMaxAge: 2 * 60 * 60,
      cookieFlags: {
        // default is empty
        access_token: {
          httpOnly: false, // prevents client side js to access it
          secure: true, // prevents cookie to be sent on non https
        },
      },
    },
  },
});
