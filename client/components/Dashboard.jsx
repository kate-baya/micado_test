import React, { useState } from 'react'
import { connect } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import BarChart from './BarChart'
import QuantitativeTotal from './QuantitativeTotal'

function Dashboard() {
  const [state, setState] = useState({
    components: [
      { id: '1', name: BarChart},
      { id: '2', name: QuantitativeTotal},
    ]
  })

  function handleOnDragEnd(result) {
    if(!result.destination ) return;
    const items = Array.from(state.components);
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    
    setState({components:items})
  }

  return (
    <>
      <h1>Dashboard</h1>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='components'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
            {state.components.map((e, idx) => {
              return <Draggable key={e.id} draggableId={e.id} index={idx}>
                {(provided) => (
                  <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                  <e.name />
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

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(Dashboard)