import { Spacing as SpacingGuide } from '~/lib/style-guide'
import styled from 'styled-components'

type SpacingType = keyof typeof SpacingGuide

interface Props {
  size: SpacingType
}

export const Spacing = styled.div<Props>`
  margin-bottom: ${(props) => SpacingGuide[props.size]}rem;
`
