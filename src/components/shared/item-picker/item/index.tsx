import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { Colors } from '~/lib/style-guide'

interface Props<T> {
  children: ReactNode
  onSelect: (item: T) => void
  isSelected: boolean
  item: T
}

export function Item<T>({ children, onSelect, item, isSelected }: Props<T>) {
  return (
    <Holder isSelected={isSelected} onClick={() => onSelect(item)}>
      {children}
    </Holder>
  )
}

const Holder = styled.div<{ isSelected: boolean }>`
  padding: 10px 20px;
  transition: 0.15s all;
  will-change: background-color, color;
  cursor: pointer;

  ${(props) => {
    if (!props.isSelected) {
      return css`
        &:hover {
          background-color: ${Colors.BG3};
        }
      `
    }
  }}

  ${(props) => {
    if (props.isSelected) {
      return css`
        background-color: ${Colors.AccordBlue};
        color: ${Colors.PureWhite};
      `
    }
  }}
`
