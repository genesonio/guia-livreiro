import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
    header: {
        height: '120px',
        display: 'flex',
        width: '75vw',
        margin: 'auto',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        width: '6rem',
        cursor: 'pointer',

        [theme.fn.smallerThan('md')]: {
            width: '4rem',
        },
    },
    input: {
        width: '20%',

        [theme.fn.smallerThan('md')]: {
            width: '60%',
        },
    },
}))

export default useStyles
