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

class Feed extends Component {
  render() {
    return (
      <FeedWrapper>
        <Card />
      </FeedWrapper>
    );
  }
}

export default Feed;
