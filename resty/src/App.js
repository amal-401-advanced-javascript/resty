import React from 'react';
import Form from './components/form/form.js';
import Result from './components/results/results.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {},
    };
  }

  handleForm = (results) => {
    this.setState({ result: results });
  };
  render() {
    return (
      <React.Fragment>
        <Form handler={this.handleForm} />
        <Result result={this.state.result}/>
      </React.Fragment>
    );
  }
}

export default App;