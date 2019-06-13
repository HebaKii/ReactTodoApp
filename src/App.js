import React from 'react';
import TasksList from './Component/Tasks-List/TasksList'
import Tasks from './Component/Tasks/Tasks'


class App extends React.Component{
  constructor() {
    super()
    this.state={
      tasks:[] ,
      currentValue :{text:'',key:'' }
    }
  }


  addTask =(e)=>{
    e.preventDefault()
    const newTask=this.state.currentValue
   {
      

      const tasks=[...this.state.tasks,newTask]

      // localStorage.setItem('tasks',JSON.stringify(tasks));
      // localStorage.setItem('newTask', "");

      this.setState({
        tasks:tasks,
        currentValue:{text:'' , key:''
        }
      })
    }
  }

  


  // savedItems =()=>{
  //   const {tasks , currentValue} =this.state
  //   const savedList=localStorage.getItem('tasks');
    
  //   this.setState({tasks:JSON.parse(savedList),currentValue:""});
  // }

  handleChange =(e)=>{
    const taskValue =e.target.value
    const currentValue= {text : taskValue ,key:Date.now()}


    this.setState({
      currentValue,
    })
  }

  inputValue =React.createRef();


  // toSaveUpdates =() =>{
  //   const tasks =this.state.tasks;

  //   localStorage.setItem('tasks',tasks);
  //   localStorage.setItem('currentValue', currentValue);


  // }



  render(){
  return (
    <div>
    <h1>Hellloooooo!!!!</h1>

    <TasksList addTask={this.addTask}
               currentValue={this.currentValue}
               inputValue={this.inputValue}
               handleChange={this.handleChange}
               toSaveUpdates={this.toSaveUpdates}
               saved={this.saved}
               tasks={this.state.tasks}
               
    />
    <Tasks inputTasks={this.state.tasks}
           deleteTask={this.deleteTask}
    />
    </div>
  );
}
}


export default App;
