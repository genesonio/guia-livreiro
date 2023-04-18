import { useLocation } from 'react-router-dom'
import useFetch from 'react-fetch-hook'

import { BackgroundImage, Center, Grid, ScrollArea } from '@mantine/core'

import { Header } from '@/components/header'
import Loading from '@/assets/loading.svg'
import Cover from '@/assets/bookimage.png'
import type { dataBook } from '@/types/books'

import useStyles from './Book.styles'

function BookPage() {
    const location = useLocation()
    const { classes } = useStyles()

    const id = location.pathname.slice(6)
    const url = 'https://www.googleapis.com/books/v1/volumes/'

    const { isLoading, data }: { isLoading: boolean; data?: dataBook | undefined } = useFetch(url + id)
    return (
        <BackgroundImage
            className={classes.background}
            src="https://static-cse.canva.com/blob/921439/ImagebyStanislavKondratievviaUnsplash.35c0d8f7.avif">
            <Header />
            <div className={classes.glass}>
                {isLoading ? (
                    <Center className={classes.load}>
                        <img src={Loading} alt="loader" />
                    </Center>
                ) : (
                    <Grid className={classes.grid}>
                        <Grid.Col span={9}>
                            <h1>{data?.volumeInfo.title}</h1>
                            <h2 className={classes.author}>{data?.volumeInfo.authors.join(' ')}</h2>
                            <div className={classes.bookInfo}>
                                <h3>{data?.volumeInfo.publisher}</h3>
                                {data?.volumeInfo.categories && <h5>{data?.volumeInfo.categories.join(' / ')}</h5>}
                            </div>
                            <ScrollArea.Autosize
                                maxHeight={450}
                                className={classes.description}
                                type="hover"
                                offsetScrollbars
                                scrollbarSize={8}>
                                {data?.volumeInfo.description?.replace(/<\/?[^>]+(>|$)/g, '')}
                            </ScrollArea.Autosize>
                        </Grid.Col>
                        <Grid.Col span={3}>
                            {data?.volumeInfo.imageLinks ? (
                                <img
                                    className={classes.cover}
                                    src={data?.volumeInfo.imageLinks?.thumbnail}
                                    alt={`Capa do livro ${data?.volumeInfo.title}`}
                                />
                            ) : (
                                <img className={classes.cover} src={Cover} alt="Capa de livro genérico" />
                            )}
                            <p className={classes.info}>{'Publicação: ' + data?.volumeInfo.publishedDate}</p>
                            <p className={classes.info}>{'Nº de Páginas: ' + data?.volumeInfo.pageCount}</p>
                        </Grid.Col>
                    </Grid>
                )}
            </div>
        </BackgroundImage>
    )
}

export default BookPage
