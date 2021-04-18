import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import {dateTransform} from './helperFunctions'

import Analytics from './Analytics'
import Graph from './Graph'
import Filter from './Filter'
import Table from './Table'

function Dashboard({settings}) {
  const [components, updateComponents] = useState(
    [{ id: '1', name: Analytics},
    { id: '2', name: Graph},
    {id: '3', name: Table}]
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
      <div className='block level has-text-weight-semibold'>
        <p className='is-size-4'>Dashboard | {dateTransform(settings.start)} - {dateTransform(settings.end)}</p>
        <Filter />
      </div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='components'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {components.map((c, idx) => {
                return <Draggable key={c.id} draggableId={c.id} index={idx}>
                  {(provided) => (
                    <div {...provided.draggableProps} ref={provided.innerRef} className='container is-widescreen'>
                      <div className="notification is-primary mb-4 p-4">
                        <c.name/>
                      <a className='level-right'><i className="fas fa-arrows-alt"  {...provided.dragHandleProps}/></a>
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

const mapStateToProps = (state) => {
  return {
    settings: state.settings,
  }
}

export default connect(mapStateToProps)(Dashboard)