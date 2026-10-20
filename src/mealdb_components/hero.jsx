import { Button } from "flowbite-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-stone-900"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-24 -top-32  rounded-full bg-orange-700/20 blur-3xl" />
        <div className="absolute -bottom-48 left-1/4  rounded-full bg-amber-500/10 blur-3xl" />
      </div>
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-orange-200">
            <span className="size-1.5 rounded-full bg-orange-400" />
            A world of flavour
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Find your next
            <span className="block font-serif italic text-orange-300">favourite.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-base leading-8 text-stone-300 sm:text-lg lg:mx-0">
            Discover recipes from every corner of the world and bring a little
            more joy to your table.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Button href="#recipes" color="light" size="lg">
              Explore recipes <span aria-hidden="true" className="ml-2">↗️</span>
            </Button>
            <a
              href="#about"
              className="inline-flex items-center rounded-lg border border-white/20 px-5 py-3 text-base font-medium text-white transition hover:border-white/40 hover:bg-white/5 focus:outline-none focus:ring-4 focus:ring-orange-200/30"
            >
              Our story
            </a>
          </div>
          <div className="mx-auto mt-10 flex max-w-sm items-center justify-center gap-4 text-left lg:mx-0 lg:justify-start">
            <div className="flex -space-x-2" aria-hidden="true">
              <span className="flex size-9 items-center justify-center rounded-full border-2 border-stone-900 bg-orange-200 text-sm">🥗</span>
              <span className="flex size-9 items-center justify-center rounded-full border-2 border-stone-900 bg-amber-200 text-sm">🍲</span>
              <span className="flex size-9 items-center justify-center rounded-full border-2 border-stone-900 bg-rose-200 text-sm">🍝</span>
            </div>
            <p className="text-xs leading-5 text-stone-400">
              <span className="block font-semibold text-stone-200">Made for curious cooks</span>
              Fresh inspiration, whenever you need it.
            </p>
          </div>
        </div>
<div
          aria-hidden="true"
          className="relative mx-auto flex w-full max-w-lg items-center justify-center"
        >
          <div className="absolute inset-5 rotate-[-8deg] border border-white/10 from-orange-300/20 to-amber-600/10" />
          <div className="absolute inset-10 rotate-[5deg] border border-white/10 bg-stone-800/70 shadow-2xl" />
          <div className="relative flex size-64 items-center justify-center rounded-full border border-white/20 from-orange-200 via-amber-400 to-orange-700 text-8xl shadow-2xl shadow-orange-950/40 sm:size-80 sm:text-9xl">
            <span className="drop-shadow-lg">🍲</span>
            <span className="absolute inset-4 rounded-full border border-white/30" />
          </div>
          <div className="absolute bottom-4 left-0 rounded-2xl border border-white/10 bg-stone-800/90 px-4 py-3 shadow-xl backdrop-blur">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-300">
              On the menu
            </p>
            <p className="mt-1 font-semibold text-white">Something wonderful</p>
          </div>
          <div className="absolute right-0 top-5 rounded-full border border-white/10 bg-stone-800/90 px-4 py-2 text-xs font-semibold text-stone-100 shadow-lg backdrop-blur">
            Made to be shared
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;