import { lazy } from 'react'

import { SuspenseLoader } from '@/components/feedback/SuspenseLoader'

const AppRoutes = lazy(() => import('./AppRoutes'))

function Routes() {
    // const [isLoading, setIsLoading] = useState<boolean>(false)

    // if (isLoading) {
    //     return (
    //         <Center>
    //             <Loader size="md" />
    //         </Center>
    //     )
    // }

    return <SuspenseLoader>{<AppRoutes />}</SuspenseLoader>
}

export default Routes
