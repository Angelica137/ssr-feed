import React, { Component } from "react";
import styled from "styled-components";
import Card from "../components/Card/Card";

const FeedWrapper = styled.div`
  background-color: #f6f7fb;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 5%;
`;

const Alert = styled.div`
  text-align: center;
`;

const ROOT_API = "https://api.stackexchange.com/2.2/";

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
      error: "",
    };
  }
  render() {
    return (
      <FeedWrapper>
        <Card />
      </FeedWrapper>
    );
  }
}

export default Feed;
