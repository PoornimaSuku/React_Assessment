import React from 'react';
import './App.css';
import AddTodo from './components/Addtodo'
import TodoList from './components/List'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.saveItem = this.saveItem.bind(this);

  }

  
  addItem(item) {
    this.state.data.unshift({
      task: item
    });
    this.setState({
      data: this.state.data
    });
  }

 
  
  findItem(item) {
     
    return this.state.data.find((element) => element.task === item) 
    
  }
  
  saveItem(oldItem, newItem) {
    let selectedItem = this.findItem(oldItem);
    selectedItem.task = newItem;
    this.setState({ data: this.state.data });
  }
  deleteItem(item) {
    let index = this.state.data.map(element => element.task).indexOf(item);
    this.state.data.splice(index, 1);
    this.setState({ data: this.state.data });
  }
  render() {
    return (
      <div>
        <div className="header">
          <h1> Todo App</h1>
          <br />

        </div>
        <AddTodo data={this.state.data} addItem={this.addItem} />
        <br />
        <br />
        
        <h1> Todo List</h1>
        <br />
        <TodoList data={this.state.data} deleteItem={this.deleteItem} saveItem={this.saveItem}
        />
      </div>
    );
  }
}

export default App;