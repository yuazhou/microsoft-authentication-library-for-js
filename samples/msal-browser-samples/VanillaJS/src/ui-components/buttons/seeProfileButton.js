export function renderSeeProfileButton() {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = "";
    const button = document.createElement("button");
    button.innerHTML = "See Profile";
    button.setAttribute("class", "btn btn-primary");
    button.addEventListener("click", () => {
        window.location.href = "/profile";
    });
    mainContent.appendChild(button);
}