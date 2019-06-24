import React from 'react'
import { Item, Title, Speed, Tags } from './ListItem.styles'

const ListItem = ({ id, item, removeItem }) => {
  const [thisItem, setThisItem] = React.useState({})

  React.useEffect(() => {
    setThisItem(item)
  }, [id, item])

  return (
    <Item>
      <Title>{item.title}</Title>
      <Speed>{item.speed}</Speed>
      <Tags>{item.tags}</Tags>
      <button onClick={() => removeItem(id)} >remove song</button>
    </Item>
  )
}

export default ListItem
