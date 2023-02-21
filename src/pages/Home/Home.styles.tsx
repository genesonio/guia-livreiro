import { createStyles } from '@mantine/core'

const useStyles = createStyles(() => ({
    grid: {
        margin: '0',
        height: '100vh',
    },
    column: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: '5rem',
        height: '5rem',
        zIndex: 1,
    },
    title: {
        fontSize: '4rem',
        color: '#cdc0b0',
        zIndex: 1,
        textShadow: '6px 4px 4px rgba(000, 000, 000, 0.25)',
    },
    input: {
        width: '16rem',
        zIndex: 1,
    },
    container: {
        flexDirection: 'column',
        gap: '8vh',
    },
    glass: {
        height: '85vh',
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
