import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import useFetch from 'react-fetch-hook'

import { BackgroundImage, Center, Grid } from '@mantine/core'

import { data } from '@/types/books'
import bookCover from '@/assets/bookimage.png'
import loading from '@/assets/loading.svg'
import { Header } from '@/components/header'

import useStyles from './Results.styles'

function ResultsPage() {
    const location = useLocation()
    const search = location.pathname.slice(9)
    const { classes } = useStyles()
    const navigate = useNavigate()
    const { isLoading, data }: { isLoading: boolean; data?: data | undefined } = useFetch(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${search}&langRestrict=pt&printType=books&projection=lite`
    )

    const handleClick = (id: string) => {
        navigate(`/book/${id}`)
    }

    return (
        <BackgroundImage
            className={classes.background}
            src="https://static-cse.canva.com/blob/921439/ImagebyStanislavKondratievviaUnsplash.35c0d8f7.avif">
            <Header />
            <Grid className={classes.grid}>
                {isLoading ? (
                    <Center style={{ width: '100%', height: '70vh' }}>
                        <img src={loading} alt="loading animation" />
                    </Center>
                ) : (
                    data?.items.map((dataBook, index) => {
                        const { volumeInfo: book } = dataBook
                        return (
                            <Grid.Col key={index} className={classes.book} lg={3} sm={12}>
                                <div className={classes.glass} onClick={() => handleClick(dataBook.id)}>
                                    {book.imageLinks ? (
                                        <img
                                            className={classes.cover}
                                            src={book.imageLinks?.thumbnail}
                                            alt={`Capa do livro ${book.title}`}
                                        />
                                    ) : (
                                        <img className={classes.cover} src={bookCover} alt="Capa de livro genérica" />
                                    )}
                                    <h1 className={classes.title}>{book.title}</h1>
                                    {book.authors?.map((author, index) => {
                                        return (
                                            <h2 className={classes.author} key={index}>
                                                {author}
                                            </h2>
                                        )
                                    })}
                                </div>
                            </Grid.Col>
                        )
                    })
                )}
            </Grid>
        </BackgroundImage>
    )
}

export default ResultsPage
