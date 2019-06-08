import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: []
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDeIncrement = () => {
    if (this.state.value !== 0) {
      this.setState({ value: this.state.value - 1 });
    } else {
    }
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className={this.getButtonClasses()}
        >
          +
        </button>
        <button
          onClick={this.handleDeIncrement}
          className={this.getButtonClasses()}
        >
          -
        </button>
      </div>
    );
  }
  formatCount() {
    const { value } = this.state;
    return value === 0 ? 'Zero' : value;
  }

  getButtonClasses() {
    let buttonClasses = 'btn btn-secondary btn-sm m-1';
    return buttonClasses;
  }
  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.value === 0 ? 'warning' : 'primary';
    return classes;
  }
}
export default Counter;
