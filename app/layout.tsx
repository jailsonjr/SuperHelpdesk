import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({children,}: {children: React.ReactNode}) {

  return (
    <html lang="pt-br" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,300,0,0&display=optional" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap&display=optional" rel="stylesheet"></link>
      </head>
        <body className={inter.className}>
          {children}
        </body>
    </html>
  )
}
