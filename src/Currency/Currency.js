import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class Currency extends Component {
  state = {
    currencies: [],
    persons: []
  };
  compare = id => {
    return function(element) {
      return element.code !== id;
    };
  };

  deleteRecord = id => {
    this.setState(prevState => ({
      currencies: prevState.currencies.filter(this.compare(id))
    }));
  };

  addRecord = data => {
    this.setState(prevState => ({
      currencies: [...prevState.currencies, data]
    }));
  };

  componentDidMount() {
    axios.get(`http://api.nbp.pl/api/exchangerates/tables/A`).then(res => {
      const currencies = res.data[0].rates;
      this.setState({ currencies });
    });
  }
  render() {
    console.log(this.state.currencies);
    const data = this.state.currencies.map((currency, index) => {
      return (
        <tr key={index}>
          <td>{currency.currency}</td>
          <td>{currency.mid}</td>
          <td>
            <Button
              variant="contained"
              onClick={() => this.deleteRecord(currency.code)}
            >
              X
            </Button>
          </td>
        </tr>
      );
    });
    return (
      <>
        <h1>Currency</h1>
        <div>
          <TextField label="Name" margin="normal" variant="outlined" />
          <TextField
            label="Value"
            type="number"
            margin="normal"
            variant="outlined"
          />
          <Button variant="contained" onClick={() => this.addRecord("aa")}>
            +
          </Button>
        </div>
        <table>
          <tbody>{data}</tbody>
        </table>
      </>
    );
  }
}

export default Currency;
