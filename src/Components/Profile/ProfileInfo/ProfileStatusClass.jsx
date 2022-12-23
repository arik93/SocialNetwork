import React from 'react'

export default class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    });
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateUserStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        state: this.props.status
      })
    }
  }

  render() {
    return (
      <div>
        {
          this.state.editMode === false ?
            <div>
              <span onDoubleClick={this.activateEditMode}>
                {this.props.status || "Нет Статуса"}
              </span>
            </div>
            :
            <div>
              <input autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.state.status} onChange={this.onStatusChange} />
            </div>
        }
      </div>
    )
  }
}

