import { ActionIcon, TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons'

import Logo from '@/assets/logo.svg'

import useStyles from './Header.styles'

function Header() {
    const { classes } = useStyles()

    return (
        <div className={classes.header}>
            <img className={classes.logo} src={Logo} />
            <TextInput
                className={classes.input}
                placeholder="Procure o nome do livro"
                radius="lg"
                rightSection={
                    <ActionIcon>
                        <IconSearch />
                    </ActionIcon>
                }
            />
        </div>
    )
}

export default Header
