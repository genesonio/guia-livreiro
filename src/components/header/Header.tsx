import { useNavigate } from 'react-router-dom'
import { ChangeEvent, useState } from 'react'

import { ActionIcon, TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons'

import Logo from '@/assets/logo.svg'

import useStyles from './Header.styles'

function Header() {
    const [search, setSearch] = useState('')
    const { classes } = useStyles()
    const navigate = useNavigate()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    return (
        <div className={classes.header}>
            <img className={classes.logo} src={Logo} onClick={() => navigate('/home')} />
            <TextInput
                className={classes.input}
                placeholder="Procure o nome do livro"
                radius="lg"
                value={search}
                onChange={(e) => handleChange(e)}
                onKeyDown={({ key }) => {
                    if (key === 'Enter') navigate(`/results/${search}`)
                }}
                rightSection={
                    <ActionIcon onClick={() => navigate(`/results/${search}`)}>
                        <IconSearch />
                    </ActionIcon>
                }
            />
        </div>
    )
}

export default Header
