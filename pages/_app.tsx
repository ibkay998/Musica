import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from '../components/Layout'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

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

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
      <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </ChakraProvider>
        
        )
}