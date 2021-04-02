import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup'
import styles from './Cards.module.css'
import cx from "classnames"

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return '...Loading'
    }

    console.log(confirmed)
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card} className={styles.container}>
                    <CardContent className={cx(styles.card, styles.infected)}>
                        <Typography color='textSecondary' gutterBottom> Infected </Typography>
                        <Typography variant='h5'> <CountUp start={0} end={confirmed.value} duration={2.5} separator=',' /></Typography>
                        <Typography color='textSecondary'> {new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint='body2'> Number of infected cases of COVID-19 </Typography>
                    </CardContent>


                    <CardContent className={cx(styles.card, styles.recovered)}>
                        <Typography color='textSecondary' gutterBottom> Recovered </Typography>
                        <Typography variant='h5'> <CountUp start={0} end={recovered.value} duration={2.5} separator=',' /></Typography>
                        <Typography color='textSecondary'> {new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint='body2'> Number of recovered cases of COVID-19 </Typography>
                    </CardContent>


                    <CardContent className={cx(styles.card, styles.deaths)}>
                        <Typography color='textSecondary' gutterBottom> Deaths </Typography>
                        <Typography variant='h5'> <CountUp start={0} end={deaths.value} duration={2.5} separator=',' /></Typography>
                        <Typography color='textSecondary'> {new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint='body2'> Number of deaths  cause by COVID-19 </Typography>
                    </CardContent>

                </Grid>

            </Grid>

        </div>
    )
}

export default Cards


