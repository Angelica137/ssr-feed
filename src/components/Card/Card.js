import React from "react";
import styled from "styled-components";
import Owner from "../Owner/owner";

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

const Meta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 2%;
`;

const Count = styled.div`
  flex-basis: 80%;
`;

const Card = () => (
  <CardWrapper>
    <Title>this is a card</Title>
    <Meta>
      <Count>
        {`Views: ${data.view_count} | Answers: ${data.answer_count}`}
      </Count>
      <Owner data={data.owner} />
    </Meta>
  </CardWrapper>
);

export default Card;
