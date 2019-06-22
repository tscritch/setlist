import React from 'react'
import { Item, Title, Speed, Tags } from './ListItem.styles'

const ListItem = ({ item }) => {
  return (
    <Item>
      <Title>{item.title}</Title>
      <Speed>{item.speed}</Speed>
      <Tags>{item.tags}</Tags>
    </Item>
  )
}

export default ListItem
