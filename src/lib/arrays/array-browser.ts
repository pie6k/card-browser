export function createArrayBrowser<T>(
  items: T[],
  currentItem: T | null,
  keyGetter?: (item: T) => string
) {
  function getCurrentItemIndex() {
    if (currentItem === null) {
      return null
    }

    if (items.length === 0) {
      return null
    }

    if (!keyGetter) {
      return items.indexOf(currentItem)
    }

    const currentItemKey = keyGetter(currentItem)

    const index = items.findIndex((item) => {
      return keyGetter(item) === currentItemKey
    })

    if (index === -1) {
      return null
    }

    return index
  }

  const currentIndex = getCurrentItemIndex()

  function getFirstItem() {
    return items[0] ?? null
  }

  function getLastItem() {
    return items[items.length - 1] ?? null
  }

  function getNextItem() {
    if (currentItem === null || currentIndex === null) {
      return getFirstItem()
    }

    return items[currentIndex + 1] ?? getFirstItem()
  }

  function getPreviousItem() {
    if (currentItem === null || currentIndex === null) {
      return getLastItem()
    }

    return items[currentIndex - 1] ?? getLastItem()
  }

  return {
    getNextItem,
    getPreviousItem
  }
}
