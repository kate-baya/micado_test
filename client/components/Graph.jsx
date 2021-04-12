import React, { useState } from 'react'
import { connect } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import BarChart from './BarChart'
import SpaceFiller from './SpaceFiller'

function Dashboard() {
  const [components, updateComponents] = useState(
    [
      { id: '1', name: BarChart},
      { id: '2', name: SpaceFiller},
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
    <>
      <h1>Graph</h1>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='components' direction='horizontal'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className='columns'>
            {components.map((c, idx) => {
              return <Draggable key={c.id} draggableId={c.id} index={idx}>
                {(provided) => (
                  <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className='column'> 
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
    </>
  )
}

export default connect()(Dashboard)