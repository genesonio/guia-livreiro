import { createStyles } from '@mantine/core'

const useStyles = createStyles(() => ({
    glass: {
        height: '75vh',
        width: '75vw',
        margin: 'auto',
        borderRadius: '2rem',
        zIndex: 0,

        padding: '0.5rem',

        background: 'rgba(255, 255, 255, 0.1)',
        boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',

        border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    grid: {
        margin: 0,
        height: '100%',
        textShadow: '0px 0px 10px #666',
    },
    cover: {
        width: '100%',
        borderRadius: '10px',
    },
    title: {
        fontSize: '1rem',
    },
    background: {
        minHeight: '100vh',
        height: '100%',
    },
    author: {
        fontSize: '1.3rem',
    },
    description: {
        maxHeight: '35vh',
        minWidth: '35vw',
        overflowY: 'scroll',
    },
    info: {
        fontWeight: 'bold',
    },
    bookInfo: {
        display: 'flex',
        gap: '10px',
        alignItems: 'baseline',
    },
    load: {
        height: '100%',
    },
}))

export default useStyles
