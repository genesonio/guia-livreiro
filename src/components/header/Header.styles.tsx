import { createStyles } from '@mantine/core'

const useStyles = createStyles(() => ({
    header: {
        height: '120px',
        display: 'flex',
        width: '73vw',
        margin: 'auto',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        width: '6rem',
    },
    input: {
        width: '20%',
    },
}))

export default useStyles
