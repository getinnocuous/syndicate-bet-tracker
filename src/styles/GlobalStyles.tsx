import React, { FC } from 'react';
import styled, { createGlobalStyle, ThemeProvider as TP, DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  breakpoints: {
    xs: '374px',
    md: '660px',
    lg: '1024px',
  },
  color: {
    winning: '#4CD137',
    drawing: '#F39C12',
    losing: '#E84118',
    body: '#212121',
    fixture: '#333333',
    time: '#0097E6',
    text: '#ffffff',
  },
};

export const GlobalStyle = createGlobalStyle`
  :root {
    --layout-max-width: 140rem;
    --h-spacing: 1.5rem;
    --v-spacing: 1.5rem;
    --content-max-width: 34rem;
    --body: 'Bungee Inline', sans-serif;
    font-size: 62.5%;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md})  {
      --h-spacing: 3rem;
      --v-spacing: 3rem;
    }
  }

  html {
    box-sizing: border-box;
    background: ${({ theme }) => theme.color.body};
    background-repeat: no-repeat;
    height: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--body);
    color: ${({ theme }) => theme.color.text};
    padding: var(--v-spacing) var(--h-spacing);
    line-height: 1;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  header {
    margin: auto;
    max-width: var(--layout-max-width);
  }

  main {
    margin: auto;
    display: grid;
    max-width: var(--layout-max-width);
    grid-row-gap: var(--v-spacing);

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      grid-column-gap: var(--h-spacing);
      grid-template-columns: auto auto auto
    }
  }

  h1 {
    font-size: 3.6rem;
    margin: 0 0 calc(var(--v-spacing) * 2);
    text-align: center;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 4.8rem;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      margin: 0 0 calc(var(--v-spacing) * 3);
    }
  }

  h2 {
    font-size: 2.4rem;
    margin: 0 0 calc(var(--v-spacing) * 2);
    text-align: center;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 3.6rem;
    }
    &.winning {
      color: ${({ theme }) => theme.color.winning}
    }
    &.drawing {
      color: ${({ theme }) => theme.color.drawing}
    }
    &.losing {
      color: ${({ theme }) => theme.color.losing}
    }
  }

`;

export const Container = styled.div`
  max-width: var(--layout-max-width);
  margin: 0 auto;
`;

type Props = {
  children?: JSX.Element;
};

export const ThemeProvider: FC<Props> = ({ children }): JSX.Element => <TP theme={theme}>{children}</TP>;
