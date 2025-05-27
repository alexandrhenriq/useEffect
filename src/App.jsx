import { Exemplo1 } from "./components/Exemplo1.jsx"
import { Exemplo2 } from "./components/Exemplo2.jsx"
import { Header } from "./components/Header.jsx"

export function App() {
  return (
    <>
      <Header />

      <main>
        <Exemplo1 />
        <Exemplo2 />
      </main>
    </>
  )
}