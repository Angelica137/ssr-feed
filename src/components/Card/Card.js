import React from "react";
import styled from "styled-components";
import Owner from "../Owner/Owner";

const CardWrapper = styled.div`
  text-align: left;
  padding: 1%;
  background: #f6f7fb;
  border-radius: 5px;
  margin-bottom: 2%;
`;

const Title = styled.h2`
  width: 100%;
  padding-bottom: 10px;
  text-align: left;
  color: #303545;
  border-bottom: 1px solid #303545;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  color: #303545;
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
