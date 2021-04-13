import React, { useState } from 'react'
import { connect } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import Analytics from './Analytics'
import Graph from './Graph'
import Filter from './Filter'

function Dashboard() {
  const [components, updateComponents] = useState(
    [{ id: '1', name: Analytics},
     { id: '2', name: Graph}]
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
      <div className='block level'>
        <h1 className='is-size-4 has-text-weight-semibold'>Dashboard</h1>
        <Filter />
      </div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='components'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {components.map((c, idx) => {
                return <Draggable key={c.id} draggableId={c.id} index={idx}>
                  {(provided) => (
                    <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className='container is-widescreen'>
                      <div className="notification is-primary mb-4 p-4">
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