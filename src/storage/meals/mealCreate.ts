import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEALS_COLLECTION } from '@storage/storageConfig'
import { MealStorageDTO } from './MealStorageDTO'
import { mealGetAll } from './mealGetAll'
import { AppError } from '@utils/AppError'
import { mealSaveSequence } from './mealSaveSequence'
import { mealDelteSequence } from './mealDeleteSequence'

export async function mealCreate(newMeal: MealStorageDTO) {
  try {
    const storedMeals = await mealGetAll()

    const mealsAlreadExists = storedMeals.filter(meal => meal.date === newMeal.date && meal.hour === newMeal.hour)

    if (mealsAlreadExists.length > 0) throw new AppError('Já existe uma refeição para essa data e hora.')

    newMeal.id = `${newMeal.date}-${newMeal.hour}`

    const storage = JSON.stringify([...storedMeals, newMeal])

    await AsyncStorage.setItem(`${MEALS_COLLECTION}`, storage)

    if (newMeal.type === 'above') {
      await mealSaveSequence()
    } else {
      await mealDelteSequence()
    }
  } catch (error) {
    throw error
  }
} 