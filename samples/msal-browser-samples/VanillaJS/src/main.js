import home from './pages/home.js';
import testPage from './pages/testPage.js'
import { msalInstance } from "./authConfig.js";
import { updateButton } from "./ui-components/updateButton.js";


msalInstance.handleRedirectPromise().then(() => {
    updateButton();
});

const routes = {
    '/': home,
    '/testPage': testPage
}

routes[window.location.pathname]();