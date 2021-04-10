import React from 'react';

import Header from './header';
import Footer from './footer';
import todosData from './todosData';

class MyApp extends React.Component{
  constructor(){
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return{
        todos: updatedTodos
      }
    })
  }

  render(){
    const footer = this.state.todos.map(item => <Footer key = {item.id} item={item}
    handleChange = {this.handleChange}/>)
    
    return (
      <div className="footer">
        <Header />
        {footer} 
    </div>
    )
  }
  }
  
export default MyApp
