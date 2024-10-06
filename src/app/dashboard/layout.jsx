import Footer from "./components/Footer"
import Header from "./components/Header"

export const metadata = {
  title: "Dashboard",
  description: "Melhor programação para o seu dia!",
}

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col h-screen w-full items-center">
      <Header />
      <main className="flex flex-col items-center w-full">{children}</main>
      <Footer />
    </div>
  )
}