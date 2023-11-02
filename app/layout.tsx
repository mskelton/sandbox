import "./global.css"
import { Metadata } from "next"
import { Rubik } from "next/font/google"

export const metadata: Metadata = {
  description: "",
  title: "Sandbox",
}

const font = Rubik({
  display: "fallback",
  fallback: ["sans-serif"],
  subsets: ["latin"],
})

export interface RootLayoutProps {
  children?: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      className={`h-full antialiased ${font.className}`}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        {/* <script */}
        {/*   dangerouslySetInnerHTML={{ __html: `(${themeEffect.toString()})();` }} */}
        {/* /> */}
        <link href="/favicon.ico" rel="icon" />
      </head>

      <body>{children}</body>
    </html>
  )
}
