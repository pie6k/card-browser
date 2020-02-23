import React from 'react'
import styled from 'styled-components'

interface Props {
  description: string
}

export function EmptyStatePlaceholder(props: Props) {
  return <Holder>{props.description}</Holder>
}

const Holder = styled.div`
  text-align: center;
`
