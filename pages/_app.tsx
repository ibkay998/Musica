import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from '../components/Layout'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { storeWrapper } from '../store/index'
import { Provider } from 'react-redux'
import { AnimatePresence } from "framer-motion"

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: '#1E1E1E',
        color: 'white',
      },
      // styles for the `a`
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
    const { store, props } = storeWrapper.useWrappedStore(pageProps);
    return (
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <Layout>
            <AnimatePresence
                exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            >
                <Component {...pageProps} />
            </AnimatePresence>
          </Layout>
        </ChakraProvider>
      </Provider>
        
      )
}

export default MyApp