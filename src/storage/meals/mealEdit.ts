import { mealDelete } from './mealDelete'
import { mealCreate } from './mealCreate'
import { MealStorageDTO } from './MealStorageDTO'

export async function mealEdit(newMeal: MealStorageDTO, id: string) {
  try {
    await mealDelete(id)
    await mealCreate(newMeal)
  } catch (error) {
    throw error
  }
} 