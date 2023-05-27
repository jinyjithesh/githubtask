import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./list.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Avatar from 'react-avatar';
export const List = () => {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState([]);
  const [total, setTotal] = useState([]);
  const [query, setQuery] = useState("");
  // const[login,setLogin]=useState([]);
  useEffect(() => {
    axios
      .get("https://api.github.com/search/commits?q=Q")
      .then((response) => {
        console.log("reaponse", response.data);
        setProfile(response.data.items);
        setLoading(false);
        setTotal(response.data);
        // console.log("profli",response.data.items);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);
useEffect(()=>{})
  const aut = [];
  for (let i = 0; i < profile.length; i++) {
    const item = profile[i].author;
    console.log("item", item);
    aut.push(item);
  }
  console.log("aut", aut);

  return (
    <div>
      <div className="header">
        <div className="headerListItem active">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          {/* <input  type="text" placeholder ='Search or jump to ....'/> */}
          <div className="serInputContiner">
            <input
              className="serInput"
              type="text"
              placeholder="Search or jump to ...."
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div>
        <span>
          <h>{total.total_count}(ms)</h>
          <button className="button">Sort by</button>
          <button className="button">Save</button>
          <button className="button">. . .</button>
        </span>
      </div>
      { loading ? (<div>loading..</div>      
            ) :(aut
        .filter((author) => {
          if (setQuery === "") {
            return author;
          } else if (
            author.login.toLocaleLowerCase().includes(query.toLocaleLowerCase())
          ) {
            return author;
          }
        })
        .map((author) => (
          <div className="Container">
            <ul key={author?.id}>
              <h4>
              <Avatar  facebookId="100008343750912" size="20"  src={author?.avatar_url} /> {author?.login}/{author?.node_id}
              </h4>
              <p>{author?.avatar_url}</p>
              <p>{author?.html_url}</p>
              <p>{author?.type}</p>
              <li>{author?.id}</li>
              {/* <a href={author.url}>{author.url}</a> */}
            </ul>
          </div>
        )))}
      
    </div>
  );
};
