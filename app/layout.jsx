import { Inter } from 'next/font/google'
import './globals.css';
import Wireframe from './wireframe.js';

// Default google font
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Wireframe></Wireframe>
      <head>
        <title>BSR-Variant</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"/>
      </head>
      <body className="bg-[#f7f6f2]">
        {children}
      </body>
    </html>
  )
}

