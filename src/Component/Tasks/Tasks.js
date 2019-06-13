import React from 'react'


class Tasks extends React.Component{
    toCreateNewTasks (task){
        return <li key={task.key} >
            {task.text}
        </li>
    }

    render(){

        const inputTask=this.props.inputTasks
        const tasksList = inputTask.map(this.toCreateNewTasks)

        return(
            <ul>
                {tasksList}
            </ul>
        )
        
    }
}

export default Tasks;