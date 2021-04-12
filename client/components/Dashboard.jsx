import React, { useState } from 'react'
import { connect } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import BarChart from './BarChart'
import QuantitativeTotal from './QuantitativeTotal'

function Dashboard() {
  const [components, updateComponents] = useState(
    [
      { id: '1', name: BarChart},
      { id: '2', name: QuantitativeTotal},
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
      <h1>Dashboard</h1>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='components'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
            {components.map((c, idx) => {
              return <Draggable key={c.id} draggableId={c.id} index={idx}>
                {(provided) => (
                  <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} > 
                  <c.name />
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