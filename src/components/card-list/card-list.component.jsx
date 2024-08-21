import { Component } from "react";
import Card from "../monster-card/card";
import "./card-list.styles.css";

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           const { name, email, id } = monster;
//           return (
//             <div key={id}>
//               <Card name={name} email={email} id={id} />
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

const CardList = (props) => {
  const { monsters } = props;
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        const { name, email, id } = monster;
        return (
          <div key={id}>
            <Card name={name} email={email} id={id} />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
