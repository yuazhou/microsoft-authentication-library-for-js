import { msalInstance, loginRequest, logoutRequest } from "../authConfig.js";
import { renderSignOutButton } from "../ui-components/buttons/signInSignOutButtons.js";
import { renderSeeProfileButton } from "../ui-components/buttons/seeProfileButton.js";
import { InteractionRequiredAuthError } from "@azure/msal-browser";

function signedInLogic() {
	// Things to do when at least 1 user is signed in
    window.location.search = "";
	renderSignOutButton((interactionType) => {
		// This callback is called when the button is clicked
		if (interactionType === "popup") {
			const popupRequest = {
				...logoutRequest,
				redirectUri: "/blank" // This page will be rendered briefly in the popup after sign-out is complete. It's best if it contains no content or logic
			};
			msalInstance.logoutPopup(popupRequest);
		} else if (interactionType === "redirect") {
			msalInstance.logoutRedirect(logoutRequest);
		}
	});
	renderSeeProfileButton();
}

function signedOutLogic() {
	// Things to do when no user is signed in

    // Get login_hint or sid from query string (use sid whenever possible)
    const request = {...loginRequest};
    const queryParameters = window.location.search;
    if (queryParameters) {
        const params = queryParameters.slice(1).split("&");
        params.forEach((params) => {
            const [key, value] = params.split("=");
            if (key === "login_hint" && value) {
                request.loginHint = value;
            } else if (key === "sid" && value) {
                request.sid = value;
            }
        });
    }

    if (request.loginHint || request.sid) {
        msalInstance.ssoSilent(request).then(() => {
            signedInLogic();
        }).catch((e) => {
            if (e instanceof InteractionRequiredAuthError) {
                msalInstance.loginRedirect(request);
            }
        });
    } else {
        msalInstance.loginRedirect(request);
    }
}

export default async function ssoSilent() {
	// If you use loginRedirect or acquireTokenRedirect you must await handleRedirectPromise on every page **before** invoking any other msal APIs
	await msalInstance.handleRedirectPromise();

	if (msalInstance.getAllAccounts().length > 0) {
		signedInLogic();
	} else {
		signedOutLogic();
	}
}
