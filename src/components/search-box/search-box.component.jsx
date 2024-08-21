import { Component } from "react";
import './search-box.styles.css';

// class SearchBox extends Component {
//   render() {
//     return (
//       <div>
//         <input
//           className={`search-box  ${this.props.className}`}
//           type="search"
//           placeholder={this.props.placeholder}
//           onChange={this.props.changeHandler}
//         />
//       </div>
//     );
//   }
// }


//functional component

const SearchBox = (props) => {
  return (
    <div>
      <input
        className={`search-box  ${props.className}`}
        type="search"
        placeholder={props.placeholder}
        onChange={props.changeHandler}
      />
    </div>
  );
};

export default SearchBox;
