import styled, { css } from "styled-components";

import { DisplayProps } from "@/interface/styled";

import { Typography } from "@/components";
import { display } from "@/utils/styled";

interface ButtonProps extends DisplayProps {
  title: string;
}

export const Button = ({ title, ...rest }: ButtonProps) => (
  <ButtonStyled {...rest}>
    <Typography variant="button">{title}</Typography>
  </ButtonStyled>
);

const ButtonStyled = styled.button(
  ({ theme }) => css`
    padding: 12px 24px;

    border: 0px;
    border-radius: 2rem;

    text-transform: uppercase;

    background-color: ${theme.colors.blue};
  `,
  display
);
