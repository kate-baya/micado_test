import React, { useState } from 'react'
import { connect } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import TableTestsByDay from './tableComponents/TableTestsByDay'
import TableActive from './tableComponents/TableActive'
import TableRecovered from './tableComponents/TableRecovered'
import TableDeceased from './tableComponents/TableDeceased'

function LoadData({ allData, testsByDay }) {
  const loaded = testsByDay
  if (loaded) {
    return <Test testsByDay={loaded} allData={allData} />
  }
  return '...Loading'
}

function Test({ allData }) {
  const [components, updateComponents] = useState(
    [{ id: '1', name: TableTestsByDay },
    { id: '2', name: TableActive },
    { id: '3', name: TableRecovered },
    { id: '4', name: TableDeceased }]
  )

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(components);
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    updateComponents(items)
  }

  return (
    <div>
      <h1 className='is-size-4 has-text-weight-bold'>Tables</h1>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='components' direction='horizontal'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className='columns is-gapless'>
                <div className='column is-one-fifth box m-1'>
                  <div className='is-size-5 has-text-weight-bold bottom-border p-3 pl-5 level'>
                    <h1>Date</h1>
                    <figure className="image is-24x24">
                      <img src="/images/calendar.png" />
                    </figure>
                  </div>
                  <ul>
                    {allData.Recovered.map(d => {
                      return <li key={d.parameter} className='p-3 pl-5 border has-text-weight-bold'>
                        {new Date(d.parameter).toString().substring(4, 15)}
                      </li>
                    }
                    )}
                  </ul>
                </div>
                {components.map((c, idx) => {
                  return <Draggable key={c.id} draggableId={c.id} index={idx}>
                    {(provided) => (
                      <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className='column box m-1'>
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
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    allData: state.allData
  }
}

export default connect(mapStateToProps)(LoadData)