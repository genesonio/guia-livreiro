import { Grid, Text, TextInput, ActionIcon } from '@mantine/core'
import { IconSearch } from '@tabler/icons'

import Logo from '@/assets/logo.svg'

import useStyles from './Home.styles'

function HomePage() {
    const { classes } = useStyles()

    return (
        <Grid>
            <Grid.Col span={12}>
                <img src={Logo} alt="logo picture" className={classes.logo} />
                <Text component="h1">
                    Guia<strong>Livreiro</strong>
                </Text>

                <TextInput
                    placeholder="Procure o nome do livro"
                    rightSection={
                        <ActionIcon>
                            <IconSearch size={20} />
                        </ActionIcon>
                    }
                />
            </Grid.Col>
        </Grid>
    )
}

export default HomePage
