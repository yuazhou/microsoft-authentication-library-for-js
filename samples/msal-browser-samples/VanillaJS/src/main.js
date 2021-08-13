import home from "./pages/home.js";
import profile from "./pages/profile.js";
import ssoSilent from "./pages/ssoSilent.js";

const routes = {
    '/': home,
    '/profile': profile,
    '/ssoSilent': ssoSilent
}

routes[window.location.pathname]();