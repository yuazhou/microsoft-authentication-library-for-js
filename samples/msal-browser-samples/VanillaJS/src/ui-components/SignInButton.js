export function renderSignInButton() {
    const buttonGroup = document.getElementById("signInButtonGroup");

    const dropdownButton = document.createElement('button');
    dropdownButton.setAttribute("class", "btn btn-secondary dropdown-toggle");
    dropdownButton.setAttribute("data-toggle", "dropdown");
    dropdownButton.innerHTML = "Sign In";
    buttonGroup.appendChild(dropdownButton);

    const dropdownMenu = document.createElement("div");
    dropdownMenu.setAttribute("class", "dropdown-menu");
    buttonGroup.appendChild(dropdownMenu);

    const popupButton = document.createElement("button");
    popupButton.innerHTML = "Sign in using Popup";
    popupButton.setAttribute("class", "dropdown-item");
    dropdownMenu.appendChild(popupButton);

    const redirectButton = document.createElement("button");
    redirectButton.innerHTML = "Sign in using Redirect";
    redirectButton.setAttribute("class", "dropdown-item");
    dropdownMenu.appendChild(redirectButton);
}