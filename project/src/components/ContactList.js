import React, { Component } from "react";
import TableCell from "./TableCell/TableCell";
import { fetchProfileURL } from "../API+Methods";

export default function ConstactList(props) {
  return (
    <div>
      {props.contacts.map((contact, index) => {
        return (
          <TableCell
            index={index}
            name={contact.name}
            number={contact.number}
            selectionHandler={props.selectionHandler}
          ></TableCell>
        );
      })}
    </div>
  );
}
