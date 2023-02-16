import { useLocation } from 'react-router-dom'
import useFetch from 'react-fetch-hook'

import { BackgroundImage, Grid } from '@mantine/core'

import { data } from '@/types/books'
import bookCover from '@/assets/bookimage.png'

import useStyles from './Results.styles'

function ResultsPage() {
    const location = useLocation()
    const search = location.pathname.slice(9)
    const { classes } = useStyles()
    const { isLoading, data }: { isLoading: boolean; data?: data | undefined } = useFetch(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${search}&langRestrict=pt&printType=books&projection=full`
    )

    return (
        <BackgroundImage
            className={classes.background}
            src="https://static-cse.canva.com/blob/921439/ImagebyStanislavKondratievviaUnsplash.35c0d8f7.avif">
            <Grid className={classes.grid}>
                {isLoading ? (
                    <h1>Loading...</h1>
                ) : (
                    data?.items.map(({ volumeInfo: book }, index) => {
                        return (
                            <Grid.Col key={index} className={classes.book} span={2}>
                                <div className={classes.glass}>
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
