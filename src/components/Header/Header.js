import React from "react";
import styled from "styled-components";

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
  <HeaderWrapper>
    <Title> Welcome to the Q&A feed </Title>
  </HeaderWrapper>
);

export default Header;
