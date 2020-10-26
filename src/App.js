import React from 'react';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todoData: todoData
    }
  }

  handleAddTodo = name =>{
    this.setState({
      todoData:[...this.state.todoData, {
        task:name,
        id:this.state.todoData.length,
        completed:false,
      }]
    })
  }
  handleToggleItem = (itemId) =>{
    this.setState({
      todoData:this.state.todoData.map(item=>{
        if(item.id === itemId){
          return {
            ...item, completed: !item.completed
          }
        } else {
          return item;
        }
      
      })
    })
    // console.log(itemId)
  }
  clearItems = () =>{
    this.setState({
      todoData:this.state.todoData.filter(item=>(!item.completed))
    });
  }
  render() {
    return (
      <div>
        <h2>Welcome to my Todo App!</h2>
        <TodoForm handleAddTodo={this.handleAddTodo}   />
        <TodoList todoData={this.state.todoData} handleToggleItem={this.handleToggleItem} />
      </div>
    );
  }
}

export default App;
