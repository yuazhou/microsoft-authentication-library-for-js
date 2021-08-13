import { msalInstance, graphConfig, loginRequest, logoutRequest } from "../authConfig.js";
import { callMSGraph } from "../externalApi/callMsGraph.js";
import { renderProfileData } from "../ui-components/profileData.js";
import { renderSignOutButton } from "../ui-components/buttons/signInSignOutButtons.js";

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
	msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
    const silentRequest = {
        ...loginRequest,
        redirectUri: "/blank"
    }
    msalInstance.acquireTokenSilent(silentRequest).then((response) => {
        callMSGraph(graphConfig.graphMeEndpoint, response.accessToken).then((response) => {
            renderProfileData(response);
        });
    });
}

function signedOutLogic() {
	// Things to do when no user is signed in
	const popupRequest = {
        ...loginRequest,
        redirectUri: "/blank" // This page will be rendered briefly in the popup after sign-in is complete. It's best if it contains no content or logic
    };
    msalInstance.loginPopup(popupRequest).then(() => {
        signedInLogic();
    });
}

export default function profile() {
	if (msalInstance.getAllAccounts().length > 0) {
        signedInLogic();
	} else {
        signedOutLogic();
    }
}