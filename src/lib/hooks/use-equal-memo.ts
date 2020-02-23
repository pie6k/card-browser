import { useRef } from 'react'
import compare from 'react-fast-compare'

export function useEqualMemo<T>(value: T) {
  const ref = useRef<T>(value)

  if (!compare(value, ref.current)) {
    ref.current = value
  }

  return ref.current
}
