export * from "gsap";
export * from "gsap/Observer";

// https://gsap.com
import { gsap } from "gsap";

/* Plugins */
// https://gsap.com/docs/v3/Plugins/Observer/
import { Observer } from "gsap/Observer";
// https://gsap.com/docs/v3/Plugins/ScrollTrigger/
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(Observer, ScrollTrigger);
