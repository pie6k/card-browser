import { normalizeSpecialCharacters } from './normalize'

export function filterArrayBySearchTerm<T>(
  input: T[],
  termGetter: (item: T) => string,
  keyword: string
) {
  const preparedKeyword = normalizeSpecialCharacters(
    keyword.trim().toLowerCase()
  )

  if (!keyword.length) {
    return input
  }

  return input.filter((item) => {
    const itemTerm = termGetter(item)

    return normalizeSpecialCharacters(itemTerm.toLowerCase()).includes(
      preparedKeyword
    )
  })
}
