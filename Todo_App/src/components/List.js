import React from "react";
import Edit from './modal';

class TodoList extends React.Component {
  renderItems() {
    return this.props.data.map((item, index) => <Edit key={index} {...item} {...this.props} />);
  }
  render() {
    return (
      <div className="list">
        {this.renderItems()}
      </div>
    );
  }
}
export default TodoList;