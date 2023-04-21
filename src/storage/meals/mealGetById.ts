import { AppError } from '@utils/AppError'
import { mealGetAll } from './mealGetAll'

export async function mealGetById(id: string) {
  try {
    const meals = await mealGetAll()
    const meal = meals.filter(meal => meal.id === id)

    if (meal.length === 0) throw new AppError('Nenhuma refeição encontrada!')

    return meal[0]
  } catch (error) {
    throw error
  }
} 