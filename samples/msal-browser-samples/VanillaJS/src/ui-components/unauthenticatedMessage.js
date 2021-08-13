export function renderUnauthenticatedMessage() {
    const mainContent = document.getElementById("main-content");
    const message = document.createElement("h5");
    message.setAttribute("class", "text-center");
    message.setAttribute("id", "WelcomeMessage");
    message.innerHTML = "Please sign-in to see your profile and read your mails";
    mainContent.appendChild(message);
}