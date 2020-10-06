import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  text-align: left;
  padding: 1%;
  background: lightGray;
  border-radius: 5px;
  margin-bottom: 2px;
`;

const Card = () => (
  <CardWrapper>
    <h2>this is a card</h2>
  </CardWrapper>
);

export default Card;
