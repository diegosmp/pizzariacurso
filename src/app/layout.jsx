import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"

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
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              backgroundColor: "#007DCC",
              color: "#f1f1f1",
              borderColor: "#285977",
            },
          }}
        />
        <main className="flex flex-col items-center w-full">{children}</main>
      </body>
    </html>
  )
}
