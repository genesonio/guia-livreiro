import { useLocation } from 'react-router-dom'
import useFetch from 'react-fetch-hook'

import { BackgroundImage, Grid } from '@mantine/core'

import { data, dataBook } from '@/types/books'

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
            style={{ height: '100vh' }}
            src="https://static-cse.canva.com/blob/921439/ImagebyStanislavKondratievviaUnsplash.35c0d8f7.avif">
            <div className={classes.glass}>
                <Grid>
                    {isLoading ? (
                        <h1>Loading...</h1>
                    ) : (
                        data?.items.map((dataBook: dataBook, index) => {
                            return (
                                <Grid.Col key={index} className={classes.book} span={2}>
                                    <h4>{dataBook.volumeInfo.title}</h4>
                                </Grid.Col>
                            )
                        })
                    )}
                </Grid>
            </div>
        </BackgroundImage>
    )
}

export default ResultsPage
