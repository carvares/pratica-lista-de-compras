import { useEffect, useState } from "react";
import styled from "styled-components";
import InsertForm from "./InsertForm";
import axios from "axios";

export default function ShoppingList() {
  // Fake data
  const [items, setItems] = useState([
    { id: 1, text: "Pão" },
    { id: 2, text: "Salsicha" },
    { id: 3, text: "Ketchup" },
  ]);

  useEffect(loadItems, []);

  function loadItems() {
    // Get items from back-end and update state
    axios.get("http://localhost:4000/list")
    .then(r => setItems(r.data))
  }

  return (
    <>
      <InsertForm onAddItem={loadItems} />
      <List>
        {items.map((item) => (
          <li key={item.id}>{item.item}</li>
        ))}
      </List>
    </>
  );
}

const List = styled.ul`
  margin-top: 40px;
  background: #fff;
  width: 600px;
  padding: 20px;
  border-radius: 10px;
  font-size: 25px;
  padding-left: 50px;
  line-height: 40px;
  list-style-type: disc;
`;
