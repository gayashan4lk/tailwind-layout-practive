import Link from 'next/link'

export function NavBar() {
  return (
    <div className="h-10 bg-green-500">
      <div className="mx-auto w-4/5 py-2">
        <Link href="/" className="mx-2">
          Home
        </Link>
        <Link href="/center-an-item" className="mx-2">
          Center an item
        </Link>
      </div>
    </div>
  )
}
