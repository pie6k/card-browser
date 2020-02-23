import styled from 'styled-components'
import { Colors } from '~/lib/style-guide'

// TODO: This input component could propably be moved to `lib`, but I'd wait till more use-cases emerge before doing that

export const Input = styled.input`
  padding: 0 20px;
  height: 50px;
  width: 100%;
  outline: none;

  ::placeholder {
    color: ${Colors.Placeholder};
    transition: 0.33s all;
  }

  &:focus {
    ::placeholder {
      opacity: 0.5;
    }
  }
`
