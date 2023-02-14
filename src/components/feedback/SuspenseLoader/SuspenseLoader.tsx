import { Suspense } from 'react'

// import { Loader, Center } from '@mantine/core'

import { SuspenseLoaderProps } from './SuspenseLoader.types'

function SuspenseLoader({ children }: SuspenseLoaderProps) {
    return <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
}

export default SuspenseLoader
