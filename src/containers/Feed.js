import React, { Component } from "react";
import styled from "styled-components";

const FeedWrapper = styled.div`
  background-color: #f6f7fb;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 5%;
`;

class Feed extends Component {
  render() {
    return <FeedWrapper />;
  }
}

export default Feed;
