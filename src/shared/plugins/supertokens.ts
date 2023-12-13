import SuperTokens from "supertokens-web-js"
import Session from "supertokens-web-js/recipe/session"
import { setLogout } from "./axios"

SuperTokens.init({
  appInfo: {
    appName: "frontend-client",
    apiBasePath: "/api",
    apiDomain: "http://localhost:3001",
  },
  recipeList: [
    Session.init({
      onHandleEvent: async (ctx) => {
        console.log(ctx.action)

        if (ctx.action === "UNAUTHORISED") await setLogout()
      },
    }),
  ],
})
