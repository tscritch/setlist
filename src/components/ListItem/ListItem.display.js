import React from 'react'
import { Item, Title, Speed } from './ListItem.styles'
import Tags from './Tags/Tags.display'

const ListItem = ({ id, item, updateItem, removeItem }) => {
  const [thisItem, setThisItem] = React.useState(item)

  React.useEffect(() => {
    setThisItem(item)
  }, [id, item])

  return (
    <Item>
      <Title type='text' value={thisItem.title} onChange={e => setThisItem({ ...thisItem, title: e.target.value })} />
      <Speed type='text' value={thisItem.speed} onChange={e => setThisItem({ ...thisItem, speed: e.target.value })} />
      <Tags item={thisItem} updateItem={newItem => updateItem(id, newItem)} />
      {thisItem !== item && <button onClick={() => updateItem(id, thisItem)} >save</button>}
      <button onClick={() => removeItem(id)} >remove song</button>
    </Item>
  )
}

export default ListItem
