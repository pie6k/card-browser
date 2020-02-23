import React, { ReactNode, useState, useRef, useLayoutEffect } from 'react'
import styled, { css } from 'styled-components'

interface Props {
  children: ReactNode
}

export function AnimateContentHeight(props: Props) {
  const [currentHeight, setCurrentHeight] = useState<number | null>(null)

  const contentRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(
    () => {
      if (!contentRef.current) {
        return
      }

      const { clientHeight } = contentRef.current

      const roundedHeight = Math.floor(clientHeight)

      if (roundedHeight !== currentHeight) {
        setCurrentHeight(roundedHeight)
      }
    },
    // we want to call this effect after every render as we want to be sure height is properly measured
    // be very carefull to avoid infinite updates loop
    [props.children, currentHeight]
  )

  return (
    <Holder>
      <ContentHolder ref={contentRef}>{props.children}</ContentHolder>
      <ContentHeightCompensator currentHeight={currentHeight} />
      <HeightPlaceholder currentHeight={currentHeight} />
    </Holder>
  )
}

const Holder = styled.div`
  position: relative;
`
const ContentHolder = styled.div``

const ContentHeightCompensator = styled.div<{
  currentHeight: number | null
}>`
  will-change: margin-bottom;
  pointer-events: none !important;

  ${(props) => {
    if (props.currentHeight === null) {
      return null
    }

    return css`
      margin-bottom: ${-props.currentHeight}px;
    `
  }}
`

const HeightPlaceholder = styled.div<{
  currentHeight: number | null
}>`
  will-change: height;
  pointer-events: none !important;

  ${(props) => {
    if (props.currentHeight === null) {
      return null
    }

    return css`
      height: ${props.currentHeight}px;
      transition: 0.33s all;
    `
  }}
`
