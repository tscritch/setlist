import styled from 'styled-components'

export const Item = styled.li`
  width: 100%;
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  background-color: ${p => p.theme.background.main}
`

export const Title = styled.input`
  margin-left: 10px;
  padding: 4px 4px;
`

export const Speed = styled.input`
  padding: 4px 4px;
`
