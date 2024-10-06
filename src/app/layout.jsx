import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "devPizzaria",
  description: "Melhor programação para o seu dia!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} antialiased flex flex-col items-center selection:bg-red-300`}
      >
        <main className="flex flex-col items-center w-full">{children}</main>
      </body>
    </html>
  )
}
