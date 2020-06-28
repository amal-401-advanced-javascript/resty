// import React from 'react';
// import './form.scss';

// class Form extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {method : '' , url : ''};
//       this.method = '';
//       this.url = '';
//     }
    
//     handleChangeUrl = (e) => {
//         const url = e.target.value;
//         this.url = url
//        };
//     handleChangeMethod = (e) => {
//         const method = e.target.value;
//         this.method = method;
//     };
//     handleClick = (e) => {
//       this.setState({method : this.method , url : this.url})
//     };
//     render() {
//       return (
//         < main className="main">
//             <div className="url">
//           <label>URL:</label>
//           <input type="text" onChange={this.handleChangeUrl} />
//           <button onClick={this.handleClick}>GO!</button>
//           <br/>
//             </div>
//           <div className="method">
            
//           <a onChange={this.handleChangeMethod} href="#get" id="get" value="GET" name="method">GET</a>
//           <a onChange={this.handleChangeMethod} href="#post" id="post" value="POST" name="method">POST</a>
//           <a onChange={this.handleChangeMethod} href="#put" id="put" value="PUT" name="method">PUT</a>
//           <a onChange={this.handleChangeMethod} href="#delete" id="delete"  value="DELETE" name="method">DELETE</a>

//           {/* <input onChange={this.handleChangeMethod} type="radio" id="get" name="method" value="GET"></input>
//           <label>GET</label>
           
//           <label><input onChange={this.handleChangeMethod} type="radio" id="post" name="method" value="POST"/>POST</label>
          
          
//           <input onChange={this.handleChangeMethod} type="radio" id="put" name="method" value="PUT"/>
//           <label>PUT</label>
          
//           <input onChange={this.handleChangeMethod} type="radio" id="delete" name="method" value="DELETE"/>
//           <label>DELETE</label> */}
//             </div>

//           <div className ='result'>
//             {this.state.method} {this.state.url}
//           </div>
//         </main>
//       );
//     }
//   }

// export default Form;

import React from "react";
import './form.scss';


class Main extends React.Component {
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
        this.setState({result: `${this.state.method} ${'  '} ${this.state.url}`})
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
                <button className='go' onClick={this.handleClickGo}>Go!</button>
                <br></br>
                <button className='method' onClick={this.handleClickGet}>GET</button>
                <button className='method' onClick={this.handleClickPost}>POST</button>
                <button className='method' onClick={this.handleClickPut}>PUT</button>
                <button className='method' onClick={this.handleClickDelete}>DELETE</button>
            </div>
       
        <div className='output'>{this.state.result} </div>
      </main>
    );
  }
}


  
  export default Main;