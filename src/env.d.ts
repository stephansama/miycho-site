/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type { Alpine } from "alpinejs";

interface ImportMetaEnv {
	readonly GOAT_COUNTER_ID: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

/**
 * @description add persist function to Alpine
 * https://alpinejs.dev/plugins/persist
 */
declare module "alpinejs" {
	interface PersistentStorage {
		getItem(key: string): null | object;
		setItem(key: string, value?: object): void;
	}
	interface PersistFunctions {
		as(key: string): PersistFunctions;
		using(storage: PersistentStorage): PersistFunctions;
	}
	interface Alpine {
		$persist<T>(initial: T): PersistFunctions;
	}
}

declare global {
	interface Window {
		/**
		 * @description add alpine instance to global window object
		 * https://docs.astro.build/en/guides/middleware/#middleware-types
		 */
		Alpine: Alpine;
		/** @description https://stephansama.goatcounter.com/help/js */
		goatcounter: {
			allow_local?: boolean;
			allow_frame?: boolean;
		};
	}
}
