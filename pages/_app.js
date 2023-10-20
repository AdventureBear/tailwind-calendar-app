import '../styles/globals.css'
import { Open_Sans} from 'next/font/google'
import ContextWrapper from "../context/ContextWrapper";


const open_sans = Open_Sans({
  weight: '400', // if single weight, otherwise you use array like [400, 500, 700],
  style: 'normal', // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ['latin'],
  variable: '--font-openSans'
})


export default function App({ Component, pageProps }) {
  return (
      <>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
          <ContextWrapper>
              <Component  className={`${open_sans.variable} font-sans`} {...pageProps} />
          </ContextWrapper>
      </>
  )
}


//https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
//https://shipsaas.com/blog/how-to-add-font-in-nextjs