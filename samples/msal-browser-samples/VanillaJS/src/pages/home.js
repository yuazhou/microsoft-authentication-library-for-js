import { msalInstance, loginRequest, logoutRequest } from "../authConfig.js";
import { renderSignInButton, renderSignOutButton } from "../ui-components/buttons/signInSignOutButtons.js";
import { renderSeeProfileButton } from "../ui-components/buttons/seeProfileButton.js";
import { renderUnauthenticatedMessage } from "../ui-components/unauthenticatedMessage.js";

function signedInLogic() {
	// Things to do when at least 1 user is signed in
	renderSignOutButton((interactionType) => {
		// This callback is called when the button is clicked
		if (interactionType === "popup") {
			msalInstance.logoutPopup(logoutRequest).then(() => {
				signedOutLogic();
			});
		} else if (interactionType === "redirect") {
			msalInstance.logoutRedirect(logoutRequest);
		}
	});
	renderSeeProfileButton();
}

function signedOutLogic() {
	// Things to do when no user is signed in
	renderSignInButton((interactionType) => {
		// This callback is called when the button is clicked
		if (interactionType === "popup") {
			msalInstance.loginPopup(loginRequest).then(() => {
				signedInLogic();
			});
		} else if (interactionType === "redirect") {
			msalInstance.loginRedirect(loginRequest);
		}
	});
	renderUnauthenticatedMessage();
}

export default async function home() {
	// If you use loginRedirect or acquireTokenRedirect you must await handleRedirectPromise on every page **before** invoking any other msal APIs
	await msalInstance.handleRedirectPromise();

	if (msalInstance.getAllAccounts().length > 0) {
		signedInLogic();
	} else {
		signedOutLogic();
	}
}
