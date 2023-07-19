import { styled } from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const ExternalContainer = styled.div``

export const Image = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 350px;
  display: block;

  .overlay {
    position: absolute;
    top: 20;
    left: 0;
    width: 100%;
    height: 37.4%;
    background-color: rgba(0, 0, 0, 0.5);

    @media (max-width: ${breakpoints.desktop}) {
      height: 41%;
    }
  }

  .container {
    position: relative;
    padding-top: 280px;
  }

  ${TagContainer} {
    position: absolute;
    top: 25px;
  }
`

export const Title = styled.h2`
  color: ${colors.white};
  font-size: 32px;
  font-weight: 900;
  line-height: 37px;
`
