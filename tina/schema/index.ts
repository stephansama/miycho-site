import { type Schema } from "tinacms";

import page from "./page";
import global from "./global";
import socials from "./socials";

/** @description https://tina.io/docs/schema/ */
export default {
	collections: [global, page, socials],
} satisfies Schema;
