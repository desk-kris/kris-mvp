import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const database = [
  "The Beatles",
  "The Rolling Stones",
  "Pink Floyd",
  "Led Zeppelin",
  "Elton John",
  "Prince",
  "Guns N' Roses",
  "Bob Dylan"
];

export default function Search() {
  let { q } = useParams();
  let [items, setItems] = useState([]);
  let history = useHistory();

  const search = () => {
    // perform some fetch to your API
    // console.log("fetching data...");

    let query = q ? q.toLowerCase() : "";
    setItems(database.filter(e => e.toLowerCase().includes(query)));
  };

  const changeRoute = ({ target }) => {
    history.push(`/search/${target.value}`);
  };

  useEffect(() => {
    search();
  }, [q]);

  return (
    <div className="w-50">
      <h1>Dynamic routes on type</h1>
      <div className="form-group">
        <input
          onChange={changeRoute}
          value={q}
          type="text"
          className="form-control form-control-lg"
          aria-describedby="helpId"
          placeholder="Type to search..."
          autoFocus
        />
      </div>
      <div>
        <ul className="list-group">
          {items.map((item, i) => {
            return (
              <li key={i} className="list-group-item">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
