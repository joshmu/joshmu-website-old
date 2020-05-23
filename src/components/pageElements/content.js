import styled, { css } from "styled-components"

export const Content = styled.div`
  height: ${({ theme }) => theme.height["full"]};
  width: ${({ theme }) => theme.width["fitContent"]};

  /* 'center' will center the child elem as well as have options to move elem off the center */
  ${({ center }) =>
    center &&
    css`
      display: flex;
      /* control positioning of child element if we do not want it centered */
      justify-content: ${({ x }) => (x ? x : "center")};
      align-items: ${({ y }) => (y ? y : "center")};
    `}

  box-sizing: border-box;

  /* MODIFIERS */
  ${({ theme }) => theme.modifiers}
`
