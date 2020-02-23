export function toggleItemInArray<T>(
  items: T[],
  itemToToggle: T,
  itemKeyGetter?: (item: T) => string
) {
  if (!itemKeyGetter) {
    if (items.includes(itemToToggle)) {
      return items.filter((item) => item !== itemToToggle)
    }

    return [itemToToggle, ...items]
  }

  const itemsKeys = items.map(itemKeyGetter)

  const itemToToggleKey = itemKeyGetter(itemToToggle)

  if (itemsKeys.includes(itemToToggleKey)) {
    return items.filter((item) => {
      return itemKeyGetter(item) !== itemToToggleKey
    })
  }

  return [itemToToggle, ...items]
}
