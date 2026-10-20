import { Card, Spinner } from "flowbite-react";
import { useState } from "react";

const MEALS_PER_PAGE = 12;

const getMealDescription = (instructions) => {
  const description = instructions?.trim();
  const maxLength = 220;

  if (!description) {
    return "";
  }

  return description.length > maxLength
    ? `${description.slice(0, maxLength).trimEnd()}…`
    : description;
};

const Meal = ({ error, loading, meals }) => {
  const [currentPage, setCurrentPage] = useState(1);

  if (loading) {
    return (
      <div className="flex items-center justify-center gap-3 py-12 text-stone-600">
        <Spinner aria-label="Loading ingredients" />
        <span>Loading meals...</span>
      </div>
    );
  }

  if (error) {
    return (
      <p className="rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-center text-red-800" role="alert">
        {error}
      </p>
    );
  }

  if (meals.length === 0) {
    return (
      <p className="py-10 text-center text-stone-600" role="status">
        No meals were found.
      </p>
    );
  }

  const totalPages = Math.ceil(meals.length / MEALS_PER_PAGE);
  const page = Math.min(currentPage, totalPages);
  const firstMealIndex = (page - 1) * MEALS_PER_PAGE;
  const paginatedMeals = meals.slice(
    firstMealIndex,
    firstMealIndex + MEALS_PER_PAGE,
  );

  return (
    <div>
      <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {paginatedMeals.map((meal) => (
          <Card
            key={meal.idMeal}
            className="overflow-hidden border-stone-200 bg-white p-0 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            {meal.strMealThumb && (
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="aspect-4/3 w-full object-cover"
                loading="lazy"
              />
            )}
            <div className="bg-stone-900 px-4 py-4 text-white">
              <h3 className="font-semibold">{meal.strMeal}</h3>
              {(meal.strCategory || meal.strArea) && (
                <p className="mt-1 text-sm text-stone-300">
                  {[meal.strCategory, meal.strArea].filter(Boolean).join(" · ")}
                </p>
              )}
              {getMealDescription(meal.strInstructions) && (
                <p className="mt-3 text-left text-sm leading-relaxed text-white">
                  {getMealDescription(meal.strInstructions)}
                </p>
              )}
            </div>
          </Card>
        ))}
      </div>
      {totalPages > 1 && (
        <nav
          aria-label="Meal pagination"
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={() => setCurrentPage(page - 1)}
            disabled={page === 1}
            className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:bg-stone-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm text-stone-600" aria-live="polite">
            Page {page} of {totalPages}
          </span>
          <button
            type="button"
            onClick={() => setCurrentPage(page + 1)}
            disabled={page === totalPages}
            className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:bg-stone-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        </nav>
      )}
      <p className="mt-4 text-center text-sm text-stone-500">
        Showing {firstMealIndex + 1}–{firstMealIndex + paginatedMeals.length} of{" "}
        {meals.length} meals
      </p>
    </div>
  );
};

export default Meal;