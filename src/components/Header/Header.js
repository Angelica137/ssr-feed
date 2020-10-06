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

const Header = () => (
  <HeaderWrapper>
    <h1> Welcome to your feed </h1>
  </HeaderWrapper>
);

export default Header;
