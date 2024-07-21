import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
export default async function MealPage() {
        const meals = await getMeals()
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious Meal, created by{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose Your Favourite Recipe and Cook It Yourself. It is easy and fun
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share"> Share Your Favourite Recepie</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
