import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background-color: #4257b2;
  height: 100%;
  display: flex;
  flex-direction: column;
  alaign-items: center;
  justify-size: calc(10px + 2vmin);
  color: white;
`;

const Title = styled.div`
  pointer-events: none;
`;

const Header = () => (
  <HeaderWrapper>
    <Title> Welcome to the Q&A feed </Title>
  </HeaderWrapper>
);

export default Header;
