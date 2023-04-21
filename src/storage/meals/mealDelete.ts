import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEALS_COLLECTION } from '@storage/storageConfig'
import { mealGetAll } from './mealGetAll'

export async function mealDelete(id: string) {
  try {
    const storedMeals = await mealGetAll()
    const mealsExists = storedMeals.filter(meal => meal.id !== id)

    const storage = JSON.stringify(mealsExists)

    await AsyncStorage.setItem(`${MEALS_COLLECTION}`, storage)
  } catch (error) {
    throw error
  }
} 