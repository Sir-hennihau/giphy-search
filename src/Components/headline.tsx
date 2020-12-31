import React, { ReactNode } from "react";
import styled from "styled-components";

interface HeadlineProps {
  children: ReactNode;
}

export const Headline = ({ children }: HeadlineProps) => {
  return <StyledHeadline>{children}</StyledHeadline>;
};

export const StyledHeadline = styled.h1`
  font-size: 50px;
  margin-bottom: 25px;
  margin-top: 50px;
  text-align: center;
`;
