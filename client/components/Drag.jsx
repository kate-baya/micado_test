import React, { Component } from 'react';

export default class AppDragDropDemo extends Component {
  state = {
    tasks: [
      { name: "Learn Angular", category: "wip", bgcolor: "yellow" },
      { name: "React", category: "wip", bgcolor: "pink" },
      { name: "Vue", category: "complete", bgcolor: "skyblue" }
    ]
  }

  // // // Drag functions // // //
  onDragOver = (e) => {
    e.preventDefault()
  }

  onDragStart = (e, id) => {
    console.log('dragStart:', id)
    e.dataTransfer.setData('text/plain',id)
  }

  onDrop = (ev, cat) => {         
    let id = ev.dataTransfer.getData("text");  
    let tasks = this.state.tasks.filter((task) => {      
      if (task.name == id) {               
        task.category = cat;                 
      }                     
      return task;          
    });           
    this.setState({                 
      ...this.state,                 
      tasks          
    });    
  }

// // // // // // // // // // // // // // // // // // // // //

  render() {
    const containers = { top: [], bottom: [] }
    //pushes div into container
    this.state.tasks.forEach((t) => {
      containers[t.category].push(
        <div key={t.name}
          onDragStart={(e) => this.onDragStart(e, t.name)}
          draggable
          className="draggable"
        >
          {t.name}
        </div>
      );
    });

    return (
      <div className="container-drag">
        <h2 className="header">DRAG & DROP DEMO</h2>

        {/* droppable container */}
        <div
          className="wip"
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => { this.onDrop(e, "wip") }}
        >
          <span className="task-header">WIP</span>
          {containers.wip}
        </div>
        
        {/* droppable container */}
        <div
          className="droppable"
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, "complete")}
        >
          <span className="task-header">COMPLETED</span>
          {containers.complete}
          {console.log(status.complete)}
        </div>
      </div>);
  }
}