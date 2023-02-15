import { createStyles } from '@mantine/core'

const useStyles = createStyles(() => ({
    glass: {
        height: '85vh',
        width: '70vw',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
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
    book: {
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '40vh',

        border: '1px solid black',
    },
}))

export default useStyles
