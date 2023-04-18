import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Grid, Text, TextInput, ActionIcon, Center, BackgroundImage } from '@mantine/core'
import { IconSearch } from '@tabler/icons'

import Logo from '@/assets/logo.svg'

import useStyles from './Home.styles'

function HomePage() {
    const [search, setSearch] = useState('')
    const { classes } = useStyles()
    const navigate = useNavigate()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const handleClick = () => {
        navigate(`/results/${search}`)
    }
    return (
        <BackgroundImage
            src={'https://static-cse.canva.com/blob/921439/ImagebyStanislavKondratievviaUnsplash.35c0d8f7.avif'}>
            <Grid className={classes.grid}>
                <Grid.Col span={12} className={classes.column}>
                    <Center className={classes.container}>
                        <>
                            <div className={classes.glass} />
                            <img src={Logo} alt="logo picture" className={classes.logo} />
                            <Text className={classes.title}>
                                Guia<strong>Livreiro</strong>
                            </Text>

                            <TextInput
                                className={classes.input}
                                placeholder="Procure o nome do livro"
                                radius="lg"
                                onKeyDown={({ key }) => {
                                    if (key === 'Enter') handleClick()
                                }}
                                onChange={(e) => handleChange(e)}
                                value={search}
                                rightSection={
                                    <ActionIcon onClick={() => handleClick()}>
                                        <IconSearch size={20} />
                                    </ActionIcon>
                                }
                            />
                        </>
                    </Center>
                </Grid.Col>
            </Grid>
        </BackgroundImage>
    )
}

export default HomePage
