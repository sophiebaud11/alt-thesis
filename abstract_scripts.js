
function highlighter(text_to_highlight) {
	text_to_highlight.style.backgroundPosition = "-99.99% 0";
	// text_to_highlight.style.color = "#E5E5E5"

}

window.onload = function runHighlights() {
	console.log("running highlights")
	var highlight1 = document.querySelector("#highlight1");
	var highlight2 = document.querySelector("#highlight2");
	setTimeout(highlighter, 2000, highlight1)
	setTimeout(highlighter, 8000, highlight2)
}
