import { useState } from "react";
import styles from "./ListGroup.module.css";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook
  const [selectedIntex, setStelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className={[styles.listGroup, styles.containter].join(" ")}>
        {items.map((item, index) => (
          <li
            className={
              selectedIntex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setStelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";

const List = styled.ul`
  .list-group {
    list-style: none;
    padding: 0;
  }
`;

interface ListItemProps {
  active: boolean;
}
const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook
  const [selectedIntex, setStelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIntex}
            key={item}
            onClick={() => {
              setStelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
