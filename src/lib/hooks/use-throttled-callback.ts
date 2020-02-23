import { useMemo } from 'react'

function simpleThrottle<A extends unknown[], F extends (...args: A) => void>(
  callback: F,
  limit: number
) {
  let shouldWait = false
  return function throttledCallback(...args: A) {
    if (!shouldWait) {
      callback(...args)
      shouldWait = true
      setTimeout(function() {
        shouldWait = false
      }, limit)
    }
  }
}

export function useThrottledCallback<F extends (...args: unknown[]) => void>(
  func: F,
  wait = 500
) {
  const throttled = useMemo(() => simpleThrottle(func, wait), [func, wait])

  return throttled
}
