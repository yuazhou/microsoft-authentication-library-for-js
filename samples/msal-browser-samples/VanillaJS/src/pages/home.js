import { msalInstance, loginRequest, logoutRequest } from "../authConfig.js";
import { renderSignInButton, renderSignOutButton } from "../ui-components/buttons/signInSignOutButtons.js";
import { renderSeeProfileButton } from "../ui-components/buttons/seeProfileButton.js";
import { renderUnauthenticatedMessage } from "../ui-components/unauthenticatedMessage.js";

function signedInLogic() {
	// Things to do when at least 1 user is signed in
	renderSignOutButton((interactionType) => {
		// This callback is called when the button is clicked
		if (interactionType === "popup") {
			const popupRequest = {
				...logoutRequest,
				redirectUri: "/blank" // This page will be rendered briefly in the popup after sign-out is complete. It's best if it contains no content or logic
			};
			msalInstance.logoutPopup(popupRequest).then(() => {
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
			const popupRequest = {
				...loginRequest,
				redirectUri: "/blank" // This page will be rendered briefly in the popup after sign-in is complete. It's best if it contains no content or logic
			};
			msalInstance.loginPopup(popupRequest).then(() => {
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
