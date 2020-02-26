export interface ItemsGroup<T> {
  name: string
  items: T[]
}

export function groupItemsByKeyGetter<T>(
  items: T[],
  groupKeyGetter: (item: T) => string
): ItemsGroup<T>[] {
  const groups: ItemsGroup<T>[] = []
  function getOrCreateGroup(groupName: string) {
    const existingGroup = groups.find((group) => group.name === groupName)

    if (existingGroup) {
      return existingGroup
    }

    const newGroup: ItemsGroup<T> = { name: groupName, items: [] }

    groups.push(newGroup)

    return newGroup
  }

  items.forEach((item) => {
    const groupName = groupKeyGetter(item)

    const group = getOrCreateGroup(groupName)

    group.items.push(item)
  })

  return groups
}
