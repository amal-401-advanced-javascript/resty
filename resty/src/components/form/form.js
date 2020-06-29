import React from "react";
import './form.scss';


class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
          url: '',
          method:'',
          result:'',
     };
    }

    handleChange = (e) =>{
        const url = e.target.value;
        this.setState({ url: url });

    };

    handleClickGo = (e) => {
        this.setState({result: `${this.state.method}   ${this.state.url}`})
    };

    handleClickGet = (e) => {
        this.setState({ method: 'GET' });
    };
    handleClickPost = (e) => {
        this.setState({ method: 'POST' });
    };
    handleClickPut = (e) => {
        this.setState({ method: 'PUT' });
    };
    handleClickDelete = (e) => {
        this.setState({method: 'DELETE' });
    };
    
  render() {
    return (
        <main>
            <div className='methodDiv'>
                <label className="url">URL:</label>
                <input type="text" className='url' onChange={this.handleChange} />
                <button className='go' onClick={this.handleClickGo} id='go'>Go!</button>
                <br></br>
                <button className='method' onClick={this.handleClickGet} id='get'>GET</button>
                <button className='method' onClick={this.handleClickPost} id='post'>POST</button>
                <button className='method' onClick={this.handleClickPut} id='put'>PUT</button>
                <button className='method' onClick={this.handleClickDelete} id='delete'>DELETE</button>
            </div>
       
        <div className='output'>{this.state.result} </div>
      </main>
    );
  }
}

export default Form;