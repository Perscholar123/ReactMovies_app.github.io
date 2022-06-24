// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS
import OMDBQueryForm from "./OMDBQueryForm";

// 3. CREATE COMPONENT
class App extends React.Component {
  render() {
    return (
      <>
        <OMDBQueryForm />
      </>
    );
  }
}

// 4. EXPORT COMPONENT
export default App;

















// // 1. import react
// import React from 'react';
// import MovieInfo from './Movie.Info';

// // 2. additional imports


// // 3. create component
// class App extends React.Component{
//     // add a state to our component

//     state = {
//         baseURL: 'http://www.omdbapi.com/?',
//         apikey: 'apikey=' + 'c27dcec2',
//         query: '&t=',
//         movieTitle: '',
//         searchURL: ''
//     }
    
//     // methods
//     handleChange = (e) =>{
//         this.setState({ [e.target.id]: e.target.value });
//       };

//       handleSubmit = (e) =>{
//         e.preventDefault()
//         this.setState({
//           searchURL: this.state.baseURL + this.state.apikey + this.state.query +  this.state.movieTitle
//         },
//         // fetch call back function
//         ()=>{
//             fetch(this.state.searchURL).then((response)=>{
//                 return response.json();
//             }).then((data)=>{
//                 // console.log(data);
//                 this.setState({
//                     searchResult:data,
//                 });
//              }).catch((error)=>{
//                 console.error(error.message);
//             });
//         }
//         );
//       };      

//     render() {
//         return (
//             <div>
//                 <h1>Movie Search</h1>
//                 <>
//                 <form onSubmit={this.handleSubmit}>
//                 <label htmlFor='movieTitle'>Title</label>{" "}
//                 <input
//                     id='movieTitle'
//                     type='text'
//                     value={this.state.movieTitle}
//                     onChange={this.handleChange}
//                 />{" "}
//                 <input
//                     type='submit'
//                     value='Find Movie Info'
//                 />
//                 </form>
//                 {/* <a href={this.state.searchURL}>{this.state.searchURL}</a> */}
//                 <MovieInfo />
//                 </>
//             </div>
//         );
//     }
// }

// // 4.export component
// export default App;