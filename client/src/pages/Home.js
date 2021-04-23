import React from "react";
import { gql, useQuery } from "@apollo/client";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Home = () => {
  const classes = useStyles();

  // const {
  //   loading,
  //   error,
  //   //desectructurar y poner el numbre que quera
  //   data,
  // } = useQuery(FETCH_POST_QUERY);

  // if (loading) return "Loading...";
  // if (error) return `Error! ${error.message}`;
  // if (data) {
  //   console.log(data);
  // }

  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

const FETCH_POST_QUERY = gql`
  {
    getPost {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

export default Home;
