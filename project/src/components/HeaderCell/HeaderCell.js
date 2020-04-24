import React from "react";
import "./HeaderCell.css";

export default function HeaderCell(props) {
  return (
    <div className="headercell">
      <img
        src="https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s320x320/94195398_577291402899643_6818464868224466944_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=gP-NwDJ5UO8AX8vf5rT&oh=4271d6c6a4066ef538292b983323e3fa&oe=5ECDE070"
        atl="profile picture"
        className="profilePic"
      ></img>
      <div>
        <div style={{ display: "flex" }}>
          <div className="firstName">{props.name}</div>
        </div>
        <div className="userHandle">{"Number of Contacts: " + props.count}</div>
      </div>
    </div>
  );
}

// style={
//   this.state.isSelected
//     ? { backgroundColor: "#ededed" }
//     : { backgroundColor: "#fafafa" }
// }
