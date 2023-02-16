import { createStyles } from '@mantine/core'

const useStyles = createStyles(() => ({
    glass: {
        height: '100%',
        width: '100%',
        margin: 'auto',
        borderRadius: '2rem',

        padding: '1rem',

        cursor: 'pointer',

        background: 'rgba(255, 255, 255, 0.1)',
        boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',

        border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    book: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '40vh',
        textAlign: 'center',
    },
    grid: {
        width: '75vw',
        margin: 'auto',
    },
    cover: {
        width: '60%',
    },
    title: {
        fontSize: '1rem',
    },
    background: {
        minHeight: '100vh',
        height: '100%',
    },
    author: {
        fontSize: '.9rem',
    },
}))

export default useStyles
