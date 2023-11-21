import Link from "next/link";


export default function Home() {
  return (
  <>
  <header>
    <h1 className="tex-2xl">Todos</h1>
    <Link href="/new">New</Link>
  </header>
  <ul></ul>
  </>
  )
}