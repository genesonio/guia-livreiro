import { displayWelcome } from '@/common/utils/welcome'

/**
 * ----- Lazy Import Initialization -----
 *
 * RootProviders.tsx
 * description: contains the main dependencies and providers of the base app
 *
 * App.tsx
 * description: contains the main structure of the base app
 *
 * ----- Reason Why: Improving Performance -----
 * These are the two main chunks that are used to render the core structure of
 * the app. Importing them with Promise.all we can load them in parallel and
 * achieve the best possible performance.
 */

Promise.all([import('@/RootProvider'), import('@/App')]).then(([{ default: render }, { default: App }]) => {
    render(App)
})

// welcome message in the console
displayWelcome()

export {}
