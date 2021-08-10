export default function home() {
	const mainContent = document.getElementById('main-content');
	const span = document.createElement("span");
	span.innerHTML = "test"
	mainContent.appendChild(span);
}
