import Meal from "./mealdb_components/Meal";
import Nav from "./mealdb_components/Nav";
import Hero from "./mealdb_components/hero.jsx";
import { useEffect, useState } from "react";

const MealDb = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [meals, setMeals] = useState([]);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let isActive = true;

    async function fetchMeals() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?f=a",
        );

        if (!response.ok) {
          throw new Error(`The meal request failed (${response.status}).`);
        }

        const data = await response.json();
        if (data.meals !== null && !Array.isArray(data.meals)) {
          throw new Error("The meal response has an unexpected format.");
        }

        if (isActive) {
          setMeals(data.meals ?? []);
        }
      } catch (fetchError) {
        console.error("Unable to load MealDB meals:", fetchError);
        if (isActive) {
          setMeals([]);
          setError("Meals could not be loaded. Check your connection and try again.");
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    }

    fetchMeals();

    return () => {
      isActive = false;
    };
  }, [retryCount]);

  return (
    <div className="flex min-h-screen flex-col bg-[#fbf8f3] text-stone-900">
      <Nav />
      <Hero />
      <main className="flex-1 px-5 py-16 sm:px-8 sm:py-20">
        <section id="recipes" className="mx-auto max-w-6xl scroll-mt-8">
          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-700">
              From TheMealDB
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Explore meals
            </h2>
            <p className="mt-3 text-stone-600">
              Browse recipes and find inspiration for your next meal.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full">
              <Meal error={error} loading={loading} meals={meals} />
              {error && (
                <div className="mt-5 text-center">
                  <button
                    type="button"
                    onClick={() => setRetryCount((count) => count + 1)}
                    className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-200"
                  >
                    Try again
                  </button>
                </div>
              )}
              {!loading && !error && meals.length > 20 && (
                <p className="mt-5 text-center text-sm text-stone-500">
                  Showing 20 of {meals.length} meals.
                </p>
              )}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto mt-20 max-w-2xl scroll-mt-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-700">
            Our table is yours
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-stone-900">
            About MealDB
          </h2>
          <p className="mt-3 leading-7 text-stone-600">
            A simple place to explore meals and find ideas for what to cook.
          </p>
        </section>
      </main>
    </div>
  );
};

export default MealDb;