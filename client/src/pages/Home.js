import React from "react";
import { gql, useQuery } from "@apollo/client";

const Home = () => {
  const { loading, error, data } = useQuery(FETCH_POST_QUERY);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  if (data) {
    console.log(data);
  }

  return (
    <div>
      <h1>home</h1>
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
