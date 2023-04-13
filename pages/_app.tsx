import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/Components/Layout'
import LoginModal from '@/Components/modals/LoginModal'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <LoginModal />
    <Layout>
    <Component {...pageProps} />
  </Layout>
  </>
  )
}
