export function renderUnauthenticatedMessage() {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = "";
    const message = document.createElement("h5");
    message.setAttribute("class", "text-center");
    message.setAttribute("id", "WelcomeMessage");
    message.innerHTML = "Please sign-in to see your profile and read your mails";
    const instructions = document.createElement("h6");
    instructions.setAttribute("class", "text-center");
    instructions.innerHTML = "To demonstrate invoking login on page load navigate directly to the /profile route";
    mainContent.appendChild(message);
    mainContent.appendChild(instructions);
}