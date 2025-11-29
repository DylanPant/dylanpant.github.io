import { Toaster } from "../app/components/ui/toaster"
import "./globals.css"
import { MouseFollower } from './components/MouseFollower';

export const metadata = {
  title: "Dylan Pant | Portfolio",
  description: "Personal portfolio for Dylan Pant"
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <MouseFollower />
        {/* All route pages will be rendered in children */}
        {children}
        <Toaster/>
      </body>
    </html>
  )
  
}