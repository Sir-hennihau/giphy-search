import React, { ReactNode } from "react";

import { HeadlineStyledHeadline } from "./Components/headlineStyledHeadline";

interface HeadlineProps {
  children: ReactNode;
}

export const Headline = ({ children }: HeadlineProps) => (
  <HeadlineStyledHeadline>{children}</HeadlineStyledHeadline>
);
