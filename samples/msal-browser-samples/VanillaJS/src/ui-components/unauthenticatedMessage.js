export function renderUnauthenticatedMessage() {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = "";
    const message = document.createElement("h5");
    message.setAttribute("class", "text-center");
    message.setAttribute("id", "WelcomeMessage");
    message.innerHTML = "Please sign-in to see your profile and read your mails";
    mainContent.appendChild(message);

    const onPageLoad = document.createElement("h6");
    onPageLoad.setAttribute("class", "text-center");
    onPageLoad.innerHTML = "To demonstrate invoking login on page load navigate directly to the /profile route";
    mainContent.appendChild(onPageLoad);

    const ssoSilent = document.createElement("h6");
    ssoSilent.setAttribute("class", "text-center");
    ssoSilent.innerHTML = "To demonstrate SSO on page load navigate directly to the /ssoSilent route with either login_hint or sid in the query parameters e.g. http://localhost:3000/ssoSilent?login_hint=testuser@contoso.com"
    mainContent.appendChild(ssoSilent);
}