import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-gap: var(--v-spacing) var(--h-spacing);
  margin: auto;
  max-width: var(--content-max-width);
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    max-width: calc((var(--content-max-width) * 2) + var(--h-spacing));
  }
`;

export const Centered = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-column: 1 / span 2;
  }
`;
