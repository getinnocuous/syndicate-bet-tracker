import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-gap: var(--v-spacing) var(--h-spacing);
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    max-width: calc((var(--content-max-width) * 2) + var(--h-spacing));
  }
`;

export const Centered = styled.div`
  display: grid;
  grid-row-gap: var(--v-spacing);
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-column: 1 / span 2;
  }
`;

export const Column = styled.div`
  display: grid;
  grid-row-gap: var(--v-spacing);
`;
