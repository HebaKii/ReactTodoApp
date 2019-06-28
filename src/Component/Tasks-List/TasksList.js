import React from 'react';
import './TasksList.css'

class TasksList extends React.Component{

    clearStorage = () => {
        localStorage.clear();
        this.props.deleteTasks();
    }

    render(){
        return(
            <form onSubmit={this.props.addTask}>
                <input placeholder="Add task .."
                    //    ref={this.props.inputValue}
                    value={this.props.currentValue}
                    onChange={this.props.handleChange}
                    //    saved={this.props.saved}
                />
                {/* <button type="submit" >Add</button> */}
                <button type="button" onClick={this.clearStorage}>Clear All</button>
                <button type="submit" >Add</button>
                
            </form>
        )

    }

   
}





export default TasksList