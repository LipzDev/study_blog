import styled, { css } from "styled-components";
import { DefaultBreakpoints, generateMedia } from "styled-media-query";

/**
 * ESTE COMPONENTE É UM VALIDADOR PARA RESOLUÇÕES, SEMELHANTE AS MEDIA QUERYS
 * LESSTHAN = MENOR QUE (SE MENOR QUE X, ENTÃO O QUE ESTIVER DENTRO DA DIV MOSTRA)
 * GREATERTHAN = MAIOR QUE (SE MAIOR QUE X, ENTÃO O QUE ESTIVER DENTRO DA DIV MOSTRA)
 */

type breakpoint = keyof DefaultBreakpoints;

const breakPoints = generateMedia({
  huge: "1440px",
  large: "1025px",
  medium: "767px",
  small: "450px",
});

export type MediaMatchProps = {
  lessThan?: breakpoint;
  greaterThan?: breakpoint;
};

const mediaMatchModifiers = {
  lessThan: (size: breakpoint) => css`
    ${breakPoints.lessThan(size)` display: block `}
  `,

  greaterThan: (size: breakpoint) => css`
    ${breakPoints.greaterThan(size)` display: block `}
  `,
};

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;
    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`;
