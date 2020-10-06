import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  text-align: left;
  padding: 1%;
  background: lightGray;
  border-radius: 5px;
  margin-bottom: 2px;
`;

const Title = styled.h2`
  width: 100%;
  padding-bottom: 10px;
  text-align: center;
  text-color: #303545;
  border-bottom: 1px solid #303545;
`;
const Card = () => (
  <CardWrapper>
    <Title>this is a card</Title>
  </CardWrapper>
);

export default Card;
