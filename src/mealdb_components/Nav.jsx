const Nav = () => {
  return (
    <header className="sticky top-0 z-10 border-b border-stone-200/80 bg-[#fbf8f3]/95 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8"
      >
        <a
          href="#home"
          className="flex items-center gap-3 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <span
            aria-hidden="true"
            className="flex size-10 items-center justify-center rounded-full bg-stone-900 text-lg text-white"
          >
            🍽
          </span>
          <span>
            <span className="block text-base font-bold tracking-tight">MealDB</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">
              Good food, found
            </span>
          </span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <a
            href="#home"
            className="rounded-full px-3 py-2 text-sm font-medium text-stone-600 transition hover:bg-white hover:text-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:px-4"
          >
            Home
          </a>
          <a
            href="#recipes"
            className="rounded-full px-3 py-2 text-sm font-medium text-stone-600 transition hover:bg-white hover:text-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:px-4"
          >
            Recipes
          </a>
          <a
            href="#about"
            className="rounded-full px-3 py-2 text-sm font-medium text-stone-600 transition hover:bg-white hover:text-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:px-4"
          >
            About
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Nav;