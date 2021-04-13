import React, { useState } from 'react'
import { connect } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import Average from './Average'
import Total from './Total'
import MinMax from './MinMax'
import Welcome from './Welcome'

function Analytics() {
  const [components, updateComponents] = useState(
    [
      { id: '1', name: Welcome},
      { id: '2', name: Total},
      { id: '3', name: MinMax},
      { id: '4', name: Average},
    ]
  )

  function handleOnDragEnd(result) {
    if(!result.destination ) return;
    const items = Array.from(components);
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    
    updateComponents(items)
  }

  return (
    <div className='block'>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='components' direction='horizontal'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className='columns is-multiline'>
            {components.map((c, idx) => {
              return <Draggable key={c.id} draggableId={c.id} index={idx}>
                {(provided) => (
                  <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className='column is-half'> 
                  <div className='box'>
                  <c.name />
                  </div>
                  </div>
                )}
                </Draggable>
            })}
            {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default connect()(Analytics)