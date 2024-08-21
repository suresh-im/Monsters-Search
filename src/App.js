import logo from "./logo.svg";
import "./App.css";
import { Component, useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

//function component

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hi This is Suresh Kumar.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//class component

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//     console.log("Constructor....");
//   }

//   componentDidMount() {
//     console.log("componentDidMount....");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => {
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             console.log("users list.....");
//             console.log(this.state);
//           }
//         );
//       });
//   }

//   searchChangeCallback = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     console.log("renderrr....");

//     const { monsters, searchField } = this.state;
//     const { searchChangeCallback } = this;
//     const modifiedMonsters = monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(searchField)
//     );
//     return (
//       <div className="App">

//       <h1 className="app-title">Monsters Rolodex</h1>

//         <SearchBox
//           changeHandler={searchChangeCallback}
//           placeholder="Search Monsters"
//           className="monsters-search-box"
//         />
//         <CardList monsters={modifiedMonsters} />
//         {/* {
//             <header className="App-header">
//               <img src={logo} className="App-logo" alt="logo" />
//               <p>
//                 Hi This is {this.state.testname} {this.state.initial}.
//               </p>
//               <button onClick={
//                 ()=>{this.setState(()=>{
//                 return {testname:'Suresh Kumar',initial:'I'}
//               },()=>{console.log(this.state)})}
//               }>Change Name</button>
//               <a
//                 className="App-link"
//                 href="https://reactjs.org"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Learn React
//               </a>
//             </header> 
//             modifiedMonsters.map((monster)=>{
//               return <div key={monster.id}><h1>{monster.name}</h1></div>
//             })
            
//             } */}
//       </div>
//     );
//   }
// }


//functional component

const App = ()=>{
console.log('render');

  const [searchField,setSearchField] = useState('');

  const [monsters,setMonsters] = useState([]);

  const [modifiedMonsters,setModifiedMonsters] =  useState(monsters);

  const searchChangeCallback = (event) => {
        const searchFieldString = event.target.value.toLowerCase();
        setSearchField(searchFieldString);
      };
  
      useEffect(() => {
        console.log('fetch api call')
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((users) => setMonsters(users));
      },[]);

      useEffect(()=>{
        console.log('modified monsters call')
        const modifiedMonstersArray = monsters.filter((monster) =>
                monster.name.toLowerCase().includes(searchField)
              );
              setModifiedMonsters(modifiedMonstersArray);
      },[monsters,searchField])

  return (
          <div className="App">
    
          <h1 className="app-title">Monsters Rolodex</h1>
    
            <SearchBox
              changeHandler={searchChangeCallback}
              placeholder="Search Monsters"
              className="monsters-search-box"
            />
            <CardList monsters={modifiedMonsters} />
    </div>
        );

}

export default App;
