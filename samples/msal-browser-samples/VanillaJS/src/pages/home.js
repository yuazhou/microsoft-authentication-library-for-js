import { msalInstance } from "../authConfig.js";
import { updateSignInSignOutButton } from "../ui-components/buttons/signInSignOutButtons.js";
import { renderSeeProfileButton } from "../ui-components/buttons/seeProfileButton.js";
import { renderUnauthenticatedMessage } from "../ui-components/unauthenticatedMessage.js";

export default async function home() {
	// If you use loginRedirect or acquireTokenRedirect you must call and await handleRedirectPromise on every page that uses msal APIs
	await msalInstance.handleRedirectPromise();

	updateSignInSignOutButton();
	if (msalInstance.getAllAccounts().length > 0) {
		renderSeeProfileButton();
	} else {
		renderUnauthenticatedMessage();
	}
}
