import styled from 'styled-components'

export const Page = styled.div`
  background-color: ${props => props.theme.background.main};
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  h4 {
    margin-top: 10px;
  }
`

export const Button = styled.button`
  background-color: ${p => p.theme.primary.main};
  color: white;
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  outline: none;
  :hover {
    background-color: ${p => p.theme.primary.dark};
    cursor: pointer;
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`

export const Link = styled.a`
  background-color: ${props => props.theme.primary.main};
  transition: all 0.2s ease-in;
  &:hover {
    background-color: ${props => props.theme.primary.dark};
    text-decoration: none;

  }
`