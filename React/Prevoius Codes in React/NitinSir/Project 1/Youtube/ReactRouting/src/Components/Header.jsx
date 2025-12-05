export default function Header() {
    return (
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl">My Website</h1>
        <nav className="mt-2">
          <a href="/" className="mr-4">Home</a>
          <a href="/about" className="mr-4">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
    );
  }
  