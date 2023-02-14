import { ComponentType, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'

import { MantineProvider } from '@mantine/core'

import theme from './theme/theme'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

function render(App: ComponentType) {
    root.render(
        <StrictMode>
            <HelmetProvider>
                <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
                    <App />
                </MantineProvider>
            </HelmetProvider>
        </StrictMode>
    )
}

export default render
