import React from 'react';

class TasksList extends React.Component{

    componentDidMount(){
        
        const tasks =localStorage.getItem(this.props.currentValue);
        
        console.log(tasks)
    }
   
    componentDidUpdate() {
        this.props.inputValue.current.focus()
        
      localStorage.setItem('tasks',JSON.stringify(this.props.tasks));
      localStorage.setItem('newTask', this.props.currentValue);
      
    }
    render(){
        return(
            <form onSubmit={this.props.addTask}>
                <input placeholder="Add task .."
                       ref={this.props.inputValue}
                       value={this.props.currentValue}
                       onChange={this.props.handleChange}
                       saved={this.props.saved}
                />
                <button type="submit" >Add</button>
            </form>
        )

    }

   
}





export default TasksList