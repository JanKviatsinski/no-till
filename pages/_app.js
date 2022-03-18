import '../styles/index.scss'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfigModule from "../tailwind.config"
import { createTheme, ThemeProvider } from '@mui/material/styles'


export const tailwindTheme = resolveConfig(tailwindConfigModule).theme

const theme = createTheme({
  overrides: {
    // MuiMenuItem: {
    //   root: {
    //     background: '#373737',
    //     '&$selected': { // <-- mixing the two classes
    //       backgroundColor: '#373737'
    //     }
    //   }
    // }
  },
  components: {
    // MuiMenuItem: {
    //   styleOverrides: {
    //     root: {
    //       // backgroundColor: 'red',
    //     },
    //   }
    // }
    // MuiSelect: {
    //   styleOverrides: {
    //     select: {
    //       color: tailwindTheme.colors.mainT,
    //       fontSize: tailwindTheme.fontSize.xs
    //     },
    //   }
    // }
  },
  palette: {
    primary: {
      main: tailwindTheme.colors.main,
      light: tailwindTheme.colors.alternate
    },
  },
})

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  // document.cookie = `NEXT_LOCALE=${locale};expires=${date.toUTCString()};path=/`
  // console.log(document.cookie)
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
