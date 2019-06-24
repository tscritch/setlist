import React from 'react'
import { TagsContainer, Tag } from './Tags.styles'

const Tags = ({ item, updateItem }) => {
  const [addingTag, setAddingTag] = React.useState(false)
  const [newTag, setNewTag] = React.useState('')

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      updateItem({ ...item, tags: [...item.tags, newTag] })
      setAddingTag(false)
      setNewTag('')
    }
  }

  const removeTag = (index) => {
    const tmp = [...item.tags]
    tmp.splice(index, 1)
    updateItem({ ...item, tags: tmp })
  }

  const tagComponents = item.tags.map((t, i) => {
    return <Tag key={`tag-${i}`}>{t} <span onClick={() => removeTag(i)}>x</span></Tag>
  })

  return (
    <TagsContainer>
      {tagComponents}
      { !addingTag && <div className='add-tag' onClick={() => setAddingTag(true)}>+</div>}
      { addingTag && <div>
        <input autoFocus value={newTag} onChange={e => setNewTag(e.target.value)} onKeyPress={handleKeyPress} />
        <div onClick={() => setAddingTag(false)}>x</div>
      </div>}
    </TagsContainer>
  )
}

export default Tags
