export default function testPage() {
	const mainContent = document.getElementById('main-content');
	const span = document.createElement("span");
	span.innerHTML = "testPage"
	mainContent.appendChild(span);
}
