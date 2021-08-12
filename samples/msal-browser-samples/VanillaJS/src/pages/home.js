import { msalInstance, graphConfig, loginRequest } from "../authConfig.js";
import { callMSGraph } from "../externalApi/callMsGraph.js";
import { renderProfileData } from "../ui-components/profileData.js";

export default function home() {
	if (msalInstance.getAllAccounts().length > 0) {
		msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
		msalInstance.acquireTokenSilent({...loginRequest}).then((response) => {
			callMSGraph(graphConfig.graphMeEndpoint, response.accessToken, renderProfileData);
		});
	}
}
