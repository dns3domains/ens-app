import styled from '@emotion/styled/macro'
import { ReactComponent as Bin } from '../Icons/Bin.svg'

const StyledBin = styled(Bin)`
  flex-shrink: 0;
  &:hover {
    g {
      transition: 0.2s;
      fill: #0dac67;
    }

    cursor: pointer;
  }
`

export default StyledBin
