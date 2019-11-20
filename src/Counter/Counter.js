import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";

class Counter extends Component {
  state = {
    value: null
  };

  handleInput = e => {
    this.setState({
      value: e.target.value
    });
  };
  render() {
    return (
      <>
        <p>counter: {this.props.counter}</p>
        <ButtonGroup>
          <Button
            color="primary"
            variant="contained"
            onClick={this.props.incrementCounter}
          >
            +
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={this.props.decrementCounter}
          >
            -
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={this.props.resetCounter}
          >
            RESET
          </Button>
        </ButtonGroup>

        <Box color="text.primary">
          <TextField
            label="Value"
            margin="normal"
            variant="outlined"
            onChange={this.handleInput}
            value={this.state.value}
          />
        </Box>
        <Box color="text.primary">
          <Button
            variant="contained"
            onClick={() => this.props.addToCounter(Number(this.state.value))}
          >
            +
          </Button>
          <Button
            variant="contained"
            onClick={() => this.props.subFromCounter(Number(this.state.value))}
          >
            -
          </Button>
        </Box>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementCounter: () => dispatch({ type: "INCREMENT" }),
    decrementCounter: () => dispatch({ type: "DECREMENT" }),
    resetCounter: () => dispatch({ type: "RESET" }),
    addToCounter: val => dispatch({ type: "ADD", val: val }),
    subFromCounter: val => dispatch({ type: "SUB", val: val })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
