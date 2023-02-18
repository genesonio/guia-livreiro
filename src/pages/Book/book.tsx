import { useLocation } from 'react-router-dom'
import useFetch from 'react-fetch-hook'

import { BackgroundImage, Center, Grid, ScrollArea } from '@mantine/core'

import { Header } from '@/components/header'
import type { dataBook } from '@/types/books'
import Loading from '@/assets/loading.svg'
import Cover from '@/assets/bookimage.png'

import useStyles from './book.styles'

function BookPage() {
    const location = useLocation()
    const { classes } = useStyles()

    const id = location.pathname.slice(6)
    const url = 'https://www.googleapis.com/books/v1/volumes/'

    const { isLoading, data }: { isLoading: boolean; data?: dataBook | undefined } = useFetch(url + id)
    const { volumeInfo: book } = data!
    return (
        <BackgroundImage
            className={classes.background}
            src="https://static-cse.canva.com/blob/921439/ImagebyStanislavKondratievviaUnsplash.35c0d8f7.avif">
            <Header />
            <div className={classes.glass}>
                {isLoading ? (
                    <Center style={{ height: '100%' }}>
                        <img src={Loading} alt="loader" />
                    </Center>
                ) : (
                    <Grid className={classes.grid}>
                        <Grid.Col span={9}>
                            <h1>{book.title}</h1>
                            <h2 className={classes.author}>{book.authors.join('<br />')}</h2>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'baseline' }}>
                                <h3>{book.publisher}</h3>
                                <h5>{book.categories.join(' / ')}</h5>
                            </div>
                            <ScrollArea
                                className={classes.description}
                                offsetScrollbars
                                scrollbarSize={6}
                                scrollHideDelay={500}>
                                <p>{book.description?.replace(/<\/?[^>]+(>|$)/g, '')}</p>
                            </ScrollArea>
                        </Grid.Col>
                        <Grid.Col span={3}>
                            {book.imageLinks ? (
                                <img
                                    className={classes.cover}
                                    src={book.imageLinks?.thumbnail}
                                    alt={`Capa do livro ${book.title}`}
                                />
                            ) : (
                                <img className={classes.cover} src={Cover} alt="Capa de livro genérico" />
                            )}
                            <p className={classes.info}>{'Publicação: ' + book.publishedDate}</p>
                            <p className={classes.info}>{'Nº de Páginas: ' + book.pageCount}</p>
                        </Grid.Col>
                    </Grid>
                )}
            </div>
        </BackgroundImage>
    )
}

export default BookPage
