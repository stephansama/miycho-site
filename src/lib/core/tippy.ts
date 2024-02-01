// https://atomiks.github.io/tippyjs/
import { registerToDOM } from "@lib/utility";
import tippy, { hideAll, roundArrow as arrow } from "tippy.js";

// add escape key listener
document.addEventListener(
	"keydown",
	(e: KeyboardEvent) => e.key === "Escape" && hideAll()
);

registerToDOM(() => {
	tippy("[data-tippy-content]", {
		arrow,
		inertia: true,
		theme: "material",
		animation: "scale",
	});
});
