import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CountUp from "react-countup";
import { Card, CardContent, Typography, Grid, Container } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function Cards({ state: { confirmed, recovered, deaths, lastUpdate }}) {
    const classes = useStyles();

    if(!confirmed){
        return "Loading...";
    }

    return (
        <div container className="container-cards">
            <Container >
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <CardContent className="card infected">
                            <Typography color="textSecondary" gutterBottom>
                                Infected
                            </Typography>
                            <Typography variant="h5">
                                <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
                            </Typography>
                            <Typography color="textSecondary">
                                {new Date(lastUpdate).toDateString()}
                            </Typography>
                            <Typography variant="body2" component="p">
                                Number of active cases of COVID-19.
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <CardContent className="card recovered">
                            <Typography color="textSecondary" gutterBottom>
                                Recovered
                            </Typography>
                            <Typography variant="h5">
                                <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
                            </Typography>
                            <Typography color="textSecondary">
                                {new Date(lastUpdate).toDateString()}
                            </Typography>
                            <Typography variant="body2" component="p">
                                Number of recovered cases of COVID-19.
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <CardContent className="card deaths">
                            <Typography color="textSecondary" gutterBottom>
                                Deaths
                            </Typography>
                            <Typography variant="h5">
                                <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
                            </Typography>
                            <Typography color="textSecondary">
                                {new Date(lastUpdate).toDateString()}
                            </Typography>
                            <Typography variant="body2" component="p">
                                Number of deaths caused by COVID-19.
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </Container>

        </div>
    );
}
