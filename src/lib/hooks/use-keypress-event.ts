import { useCallback, KeyboardEvent } from 'react'
import { useEqualMemo } from './use-equal-memo'

type SupportedKey = 'ArrowUp' | 'ArrowDown'

type KeysMap = {
  [key in SupportedKey]?: () => void
}

export function useKeypressEvent(map: KeysMap, dontPreventDefault = false) {
  const memoMap = useEqualMemo(map)
  const keyPressEvent = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key as SupportedKey

      const keyHandler = memoMap[key]

      if (!keyHandler) {
        return
      }

      if (!dontPreventDefault) {
        event.preventDefault()
      }

      keyHandler()
    },
    [memoMap, dontPreventDefault]
  )

  return keyPressEvent
}
