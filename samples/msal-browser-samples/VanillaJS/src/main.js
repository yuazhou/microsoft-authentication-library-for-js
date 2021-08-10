import home from './pages/home.js';
import { renderSignInButton } from "./ui-components/SignInButton.js";

renderSignInButton();

const routes = {
    '/': home
}

routes[window.location.pathname]();