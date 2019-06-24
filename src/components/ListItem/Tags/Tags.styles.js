import styled from 'styled-components'

export const TagsContainer = styled.div`
  padding: 4px 4px;
  display: flex;
  justify-content: flex-start;
  .add-tag {
    padding: 4px 8px;
    margin: 0 4px;
    border-radius: 20px;
    background-color: ${p => p.theme.background.darker};
    &:hover {
        cursor: pointer;
        background-color: ${p => p.theme.background.darkest};
      }
  }
`

export const Tag = styled.div`
  padding: 4px 16px;
  margin: 0 4px;
  border-radius: 20px;
  background-color: ${p => p.theme.background.darker};
`
