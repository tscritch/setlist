import styled from 'styled-components'

export const Page = styled.div`
  display: flex;
  background-color: ${props => props.theme.background.main};
`

export const Container = styled.div`
  background-color: white;
  height: 300px;
  width: 400px;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.15)
`

export const Link = styled.a`
  background-color: ${props => props.theme.primary.main};
  transition: all 0.2s ease-in;
  &:hover {
    background-color: ${props => props.theme.primary.dark};
    text-decoration: none;

  }
`