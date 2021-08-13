import { msalInstance, graphConfig, loginRequest } from "../authConfig.js";
import { callMSGraph } from "../externalApi/callMsGraph.js";
import { renderProfileData } from "../ui-components/profileData.js";
import { updateSignInSignOutButton } from "../ui-components/buttons/signInSignOutButtons.js";

export default function profile() {
	if (msalInstance.getAllAccounts().length > 0) {
        updateSignInSignOutButton();
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
	} else {
        const popupRequest = {
            ...loginRequest,
            redirectUri: "/blank" // This page will be rendered briefly in the popup after sign-in is complete. It's best if it contains no content or logic
        };
        msalInstance.loginPopup(popupRequest).then((response) => {
            updateSignInSignOutButton();
            callMSGraph(graphConfig.graphMeEndpoint, response.accessToken).then((response) => {
                renderProfileData(response);
            });
        });
    }
}