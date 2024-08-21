import { Component } from "react";
import "./card.styles.css";

// class Card extends Component {
//   render() {
//     const { name, id, email } = this.props;
//     return (
//       <div className="card-container" key={id}>
//         <img
//           alt={`monster ${name}`}
//           src={`https://robohash.org/${id}?set=set2`}
//         />
//         <h1>{name}</h1>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

const Card = ({name,email,id})=>{
  return (
          <div className="card-container" key={id}>
            <img
              alt={`monster ${name}`}
              src={`https://robohash.org/${id}?set=set2`}
            />
            <h1>{name}</h1>
            <p>{email}</p>
          </div>
        );
}

export default Card;
