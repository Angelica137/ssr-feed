import React from "react";
import styled from "styled-components";
import Owner from "../Owner/Owner";

const CardWrapper = styled.div`
  text-align: left;
  padding: 8px;
  background: lightGray;
  border-radius: 4px;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  width: 100%;
  padding: 8px;
  text-align: left;
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

const Card = ({ data }) => (
  <CardWrapper>
    <Title>{data.title}</Title>
    <Meta>
      <Count>
        {`Views: ${data.view_count} | Answers: ${data.answer_count}`}
      </Count>
      <Owner data={data.owner} />
    </Meta>
  </CardWrapper>
);

export default Card;
