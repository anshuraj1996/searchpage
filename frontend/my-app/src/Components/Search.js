import { React} from "react";
// import data from "./ListData.json";
import {useState,useEffect} from "react";
import { Link } from "react-router-dom"
import axios from 'axios'

import "./search.css";

function Search() {
  const [query, setQuery] = useState("")

  const [title, setTitle] = useState("")

 

  const [Data,setData] = useState([])
 

  useEffect(()=>{  
      axios.get('http://localhost:5000/data?q=${query}').then((res)=>{   //axios 
          console.log(res)
           setData(res.data.posts) 
          if (query) {
            setData(res.data);
          }

      })
  },[])
  console.log(Data)


  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = title;
  }, [title]);

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="ma">
       <input className="search" placeholder="Search" onChange={event => setQuery(event.target.value)} onChangeCapture={changeTitle}value={title}style={styles.input} />
       <Link to='/posts'><button className='search'>Search</button></Link> 
        {
  Data.filter(post => {
    if (query === '') {
      return post;
    } else if (post.text.toLowerCase().includes(query.toLowerCase())) {
      return post;
    }
  })
.map((post, index) => (
    <div className="box" key={index}>
      <p>{post.title}</p>
      
    </div>
  ))
}


      





     
    </div>
  );
}

export default Search;

const styles = {
  container: {
    width: 500,
    margin: "50px auto",
    display: "flex",
    justifyContent: "center",
  },
  input: {
    width: 300,
    padding: "5px 20px",
  },

};