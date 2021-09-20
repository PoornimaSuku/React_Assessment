import { Modal } from 'react-bootstrap';
import React from 'react';


class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      show: false,

    };
  }
  renderName() {
    return (
      <ul>
        {this.props.task}
      </ul>
    );
  }

  onEditClick() {
    this.setState({ editing: true });
  }
  onCancelClick() {
    this.setState({ editing: false });
  }
  onSaveClick(e) {
    e.preventDefault();
    this.props.saveItem(this.props.task, this.state.editInput);
    this.setState({
      show: !this.state.show,
      editing: false
    });
  }
  handleOnChange(e) {
    this.setState({
      editInput: e.target.value
    });
  }
  handleModal() {
    this.setState({ show: !this.state.show })
  }
  handleEdit() {
    this.handleModal();

  }

  renderButtons() {
    return (
      <div className="todobutton">
        <span className="editdel">
          <li className="list-group-item  d-flex justify-data-between ">

            <button class="btn btn-primary"
              onClick={() => this.handleEdit()} >
              Edit
            </button>
            <p></p>

            <button class="btn btn-danger"
              onClick={(this.props.deleteItem.bind(this, this.props.task))} >
              Delete
            </button>
          </li>
        </span>
        <Modal show={this.state.show} animation={true} onHide={() => this.handleModal()}>
          <Modal.Header>Edit Task</Modal.Header>
          <Modal.Body>
            <form onClick={this.onEditClick.bind(this)}>
              <input type="text" placeholder="Enter Task" defaultValue={this.props.task}
                onChange={(e) => { this.handleOnChange(e) }} />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={this.onSaveClick.bind(this)}> Ok</button>
            <button onClick={() => this.handleModal()}> Cancel </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  render() {
    return (
      <div className="item">
        <br></br>
        <span className="name">
          {this.renderName()}
        </span>

        <span className="actions">
          {this.renderButtons()}
        </span>
      </div>
    );
  }
}

export default Edit;