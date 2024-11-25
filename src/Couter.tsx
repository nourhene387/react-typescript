import React, { Component } from 'react';

// Define the type for the component's state
interface CounterState {
  count: number; // State has a 'count' property of type number
}

// Class component definition with state and props types
class Counter extends Component<{}, CounterState> { 
  // Initial state setup with count: 0
  state: CounterState = {
    count: 0
  };

  // Increment method that updates the state
  increment = () => {
    this.setState({ count: this.state.count + 1 }); // Increasing the count
  };

  // Render method to return the JSX for the component
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p> {/* Display the current count */}
        <button onClick={this.increment}>Increment</button> {/* Button to increment */}
      </div>
    );
  }
}

export default Counter;
