import { useState, useCallback } from 'react'
import { toggleItemInArray } from '~/lib/arrays'

export function useArrayToggle<T>(
  initialItems: T[],
  itemKeyGetter?: (item: T) => string
) {
  const [selectedItems, setSelectedItems] = useState<T[]>(initialItems)

  const toggleItem = useCallback(
    (itemToToggle: T) => {
      const newItems = toggleItemInArray(
        selectedItems,
        itemToToggle,
        itemKeyGetter
      )

      setSelectedItems(newItems)
    },
    [selectedItems, itemKeyGetter]
  )

  return [selectedItems, toggleItem, setSelectedItems] as const
}
