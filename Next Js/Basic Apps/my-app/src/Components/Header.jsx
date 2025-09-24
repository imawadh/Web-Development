import Link from "next/link"

function Header() {
    return (
        <header className="grid grid-cols-2  text-white bg-black p-3 text-3xl">
            <div>
                Company Logo
            </div>
            <nav>
                <ul className="flex gap-4">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link href="/services">Service</Link>
                    </li>
                    <li>
                        <Link href="/font">Font</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
