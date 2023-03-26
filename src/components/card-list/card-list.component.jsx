// import { Component } from "react"; //oop needed
import Card from "../card/card.component";
import "./card-list.styles.css";

const Cardlist = (
  { monsters } // implicit return
) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>
);

// class Cardlist extends Component {
//   render() {
//     // only one tag // not multiple tag
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           const { name, email, id } = monster;
//           return <Card monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }

export default Cardlist;
