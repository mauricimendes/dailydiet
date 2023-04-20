import { SelectType } from "@components/Select/styltes"

export type MealStorageDTO = {
  id?: string
  name: string
  description: string
  date: string
  hour: string
  type: SelectType
}