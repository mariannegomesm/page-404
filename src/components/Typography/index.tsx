import styled, { css } from "styled-components";

import { decoration, display } from "@/utils/styled";
import { DecorationProps, DisplayProps } from "@/interface/styled";

interface TypographyProps extends DisplayProps, DecorationProps {
  variant?: keyof typeof TEXT_VARIANTS;
  fontWeight?: keyof typeof FONT_WEIGHT_VARIANTS;
}

const TEXT_VARIANTS = {
  heading: {
    "font-size": "40px",
    "line-height": "120%",
  },
  text: {
    "font-size": "20px",
    "line-height": "140%",
  },
  button: {
    "font-size": "14px",
    "line-height": "140px",
  },
};

const FONT_WEIGHT_VARIANTS = {
  regular: 300,
  semibold: 600,
  bold: 700,
};

export const Typography = styled.p<TypographyProps>(
  ({ variant = "text", fontWeight = "regular" }) => css`
    font-size: ${TEXT_VARIANTS[variant]["font-size"]};
    font-weight: ${FONT_WEIGHT_VARIANTS[fontWeight]};
  `,
  display,
  decoration
);
