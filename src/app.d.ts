// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		interface Platform {
			env: {
				CAISY_PROJECT_ID: efc367a5-e9e7-494b-9ca6-62eb3c1399b7;
        CAISY_API_KEY: 1x76JomCn1XmnRdFNLg5BbeX40141XWL;
			};
			context: {
				waitUntil(promise: Promise<any>): void;
			};
			caches: CacheStorage & { default: Cache }
		}
	}
}

export {};
