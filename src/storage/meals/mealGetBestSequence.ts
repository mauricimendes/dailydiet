import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEALS_COLLECTION } from '@storage/storageConfig'

export async function mealGetBestSequence() {
  try {
    const bestSequence = await AsyncStorage.getItem(`${MEALS_COLLECTION}-best_sequence`)
    return bestSequence
  } catch (error) {
    throw error
  }
} 