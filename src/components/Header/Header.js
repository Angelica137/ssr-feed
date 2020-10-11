import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

const HeaderWrapper = styled.div`
  background-color: #4257b2;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 8px;
`;

const Title = styled.h1`
  pointer-events: none;
`;

const Header = () => (
  <>
    <Helmet>
      <title>Welcome to Q&A</title>
      <meta
        name="description"
        content="This is a community feed project build with React"
      />
    </Helmet>
    <HeaderWrapper>
      <Title>Welcome to Q&A</Title>
    </HeaderWrapper>
  </>
);

export default Header;
