import React, { Component } from 'react';

class ChildComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selected_name: this.props.selected_name
    }
  }

  componentDidUpdate(prevProps) {
    //Check that props.names.list changed
    if(this.props.selected_name !== prevProps.selected_name) {
      this.setState({
        selected_name: this.props.selected_name
      })
    }
  }

  render() {
    return (
      <h3>Name being edited: {this.state.selected_name}</h3>
    );
  }
}

export default ChildComponent
