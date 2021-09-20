import React from 'react';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newInputItem: ''
    }
    this.handleOnCreate = this.handleOnCreate.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);

  }

  handleOnCreate(e) {
    e.preventDefault();
    const newItem = this.state.newInputItem;
    if (newItem !== '') {
      console.log(this.state.newInputItem)
      this.props.addItem(this.state.newInputItem)
      this.setState({
        newInputItem: ''
      });
    }
  }

  handleOnChange(e) {
    this.setState({
      newInputItem: e.target.value
    })
  }

  render() {
    return (
      <div className="textField">
        <input  type="text" placeholder="Enter Task" value={this.state.newInputItem} onChange={(e) => { this.handleOnChange(e) }} />
        <button
          onClick={(e) => { this.handleOnCreate(e) }} >
          Add Task
        </button>
      </div>

    );
  }
}

export default AddTodo;