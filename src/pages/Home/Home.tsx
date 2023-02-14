import { Grid, Text, TextInput, ActionIcon, Center, BackgroundImage } from '@mantine/core'
import { IconSearch } from '@tabler/icons'

import Logo from '@/assets/logo.svg'

import useStyles from './Home.styles'

function HomePage() {
    const { classes } = useStyles()

    return (
        <BackgroundImage
            style={{ height: '100vh' }}
            src={'https://static-cse.canva.com/blob/921439/ImagebyStanislavKondratievviaUnsplash.35c0d8f7.avif'}>
            <Grid style={{ margin: '0' }}>
                <Grid.Col span={12}>
                    <Center className={classes.container}>
                        <div className={classes.glass} />
                        <img src={Logo} alt="logo picture" className={classes.logo} />
                        <Text ta="center" className={classes.title}>
                            Guia<strong>Livreiro</strong>
                        </Text>

                        <TextInput
                            className={classes.input}
                            placeholder="Procure o nome do livro"
                            radius="lg"
                            rightSection={
                                <ActionIcon>
                                    <IconSearch size={20} />
                                </ActionIcon>
                            }
                        />
                    </Center>
                </Grid.Col>
            </Grid>
        </BackgroundImage>
    )
}

export default HomePage
