import { Space_Grotesk } from 'next/font/google'
import "./globals.css"
import { MouseFollower } from './components/MouseFollower';
import { SmoothScroll } from './components/SmoothScroll';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Dylan Pant | Portfolio",
  description: "Personal portfolio for Dylan Pant"
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <SmoothScroll>
            <MouseFollower />
            {children}
        </SmoothScroll>
      </body>
    </html>
  )
}