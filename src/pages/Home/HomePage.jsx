
function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-950">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="/" className="text-2xl font-bold text-white">
          Next<span className="text-blue-500">Web</span>
        </a>

        <div className="hidden items-center gap-8 text-slate-300 md:flex">
          <a href="/" className="transition hover:text-blue-400">
            Home
          </a>
          <a href="#features" className="transition hover:text-blue-400">
            Features
          </a>
          <a href="#products" className="transition hover:text-blue-400">
            Products
          </a>
        </div>

        <button className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
          Get Started
        </button>
      </nav>
    </header>
  );
}

export default Header;
