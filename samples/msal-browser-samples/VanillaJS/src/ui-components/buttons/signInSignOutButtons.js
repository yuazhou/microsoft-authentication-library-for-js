export function renderSignInButton(callback) {
    const buttonGroup = document.getElementById("signInButtonGroup");
    buttonGroup.innerHTML = "";
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
    popupButton.addEventListener('click', () => {
        callback("popup");
    });
    dropdownMenu.appendChild(popupButton);

    const redirectButton = document.createElement("button");
    redirectButton.innerHTML = "Sign in using Redirect";
    redirectButton.setAttribute("class", "dropdown-item");
    redirectButton.addEventListener('click', () => {
        callback("redirect");
    });
    dropdownMenu.appendChild(redirectButton);
}

export function renderSignOutButton(callback) {
    const buttonGroup = document.getElementById("signInButtonGroup");
    buttonGroup.innerHTML = "";
    const dropdownButton = document.createElement('button');
    dropdownButton.setAttribute("class", "btn btn-secondary dropdown-toggle");
    dropdownButton.setAttribute("data-toggle", "dropdown");
    dropdownButton.innerHTML = "Sign Out";
    buttonGroup.appendChild(dropdownButton);

    const dropdownMenu = document.createElement("div");
    dropdownMenu.setAttribute("class", "dropdown-menu");
    buttonGroup.appendChild(dropdownMenu);

    const popupButton = document.createElement("button");
    popupButton.innerHTML = "Sign Out using Popup";
    popupButton.setAttribute("class", "dropdown-item");
    popupButton.addEventListener('click', () => {
        callback("popup");
    });
    dropdownMenu.appendChild(popupButton);

    const redirectButton = document.createElement("button");
    redirectButton.innerHTML = "Sign Out using Redirect";
    redirectButton.setAttribute("class", "dropdown-item");
    redirectButton.addEventListener('click', () => {
        callback("redirect");
    });
    dropdownMenu.appendChild(redirectButton);
}