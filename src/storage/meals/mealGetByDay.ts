import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEALS_COLLECTION } from '@storage/storageConfig'
import { MealStorageDTO } from './MealStorageDTO'

export async function mealGetByDay(day: string) {
  try {
    const storage = await AsyncStorage.getItem(`${MEALS_COLLECTION}`)
    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : []

    return meals.filter(meal => meal.date === day)
  } catch (error) {
    throw error
  }
} 