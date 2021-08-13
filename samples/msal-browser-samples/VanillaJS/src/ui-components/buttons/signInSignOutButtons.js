import { msalInstance, loginRequest, logoutRequest } from "../../authConfig.js";

export function updateSignInSignOutButton() {
    const buttonGroup = document.getElementById("signInButtonGroup");
    buttonGroup.innerHTML = "";
    if (msalInstance.getAllAccounts().length > 0) {
        renderSignOutButton(buttonGroup);
    } else {
        renderSignInButton(buttonGroup);
    }
}

export function renderSignInButton(buttonGroup) {
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
        msalInstance.loginPopup(loginRequest).then(() => {
            updateSignInSignOutButton();
        });
    });
    dropdownMenu.appendChild(popupButton);

    const redirectButton = document.createElement("button");
    redirectButton.innerHTML = "Sign in using Redirect";
    redirectButton.setAttribute("class", "dropdown-item");
    redirectButton.addEventListener('click', () => {
        msalInstance.loginRedirect(loginRequest);
    });
    dropdownMenu.appendChild(redirectButton);
}

export function renderSignOutButton(buttonGroup) {
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
        msalInstance.logoutPopup(logoutRequest).then(() => {
            updateSignInSignOutButton();
        });
    });
    dropdownMenu.appendChild(popupButton);

    const redirectButton = document.createElement("button");
    redirectButton.innerHTML = "Sign Out using Redirect";
    redirectButton.setAttribute("class", "dropdown-item");
    redirectButton.addEventListener('click', () => {
        msalInstance.logoutRedirect(logoutRequest);
    });
    dropdownMenu.appendChild(redirectButton);
}