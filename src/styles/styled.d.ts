// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      xs: string;
      md: string;
      lg: string;
    };
    color: {
      winning: string;
      drawing: string;
      losing: string;
      body: string;
      fixture: string;
      time: string;
      text: string;
    };
  }
}
