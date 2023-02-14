import { createStyles } from '@mantine/core'

const useStyles = createStyles(() => ({
    logo: {
        width: 80,
        height: 80,
        zIndex: 1,
    },
    title: {
        fontSize: '4rem',
        color: '#272727',
        zIndex: 1,
        textShadow: '6px 4px 4px rgba(000, 000, 000, 0.25)',
    },
    input: {
        width: '16rem',
        zIndex: 1,
    },
    container: {
        height: '98vh',
        flexDirection: 'column',
        gap: '3rem',
    },
    glass: {
        height: '70vh',
        width: '70vw',
        position: 'fixed',
        margin: 'auto',
        borderRadius: '2rem',
        zIndex: 0,

        background: 'rgba(255, 255, 255, 0.1)',
        boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',

        border: '1px solid rgba(255, 255, 255, 0.1)',
    },
}))

export default useStyles
