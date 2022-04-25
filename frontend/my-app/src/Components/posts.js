import React, { useEffect , useState } from 'react';
//  import data from "./ListData.json";
 import './posts.css';
 import './Static.js';
 import { Link } from 'react-router-dom'
 import axios from 'axios'

// import Data from './data.json'

 
export default function Posts() {
    const [Data,setData] = useState([])
  
    useEffect(()=>{  
        axios.get('http://localhost:5000/data').then((res)=>{   //axios 
            console.log(res)
            
            setData(res.data.posts) 
        })
    },[])
    console.log(Data)

   
    
    return (
        <div className='main'>
            <>
            
         <header className='for-header'>
             <div className='inner'>
                 <input className='search' type="text" ></input><br></br>
           <h4 className='for-icon'>All</h4>
           <h4 className='for-name'>Images</h4>
            <h4 className='for-camera'>Books </h4>
            <h4 className='for-camera'>Shopping  </h4>
            <h4 className='for-camera'>News </h4>
            <h4 className='for-camera'>More </h4>
            
            </div>
        </header>
            

  
 
        
        <body>
        {
                Data.map(post =>{
                    return(
                        
                        <body className='inner'>
                            <div >
                        <h5>{post.text}</h5>
                        
                        <Link to='/Static'> <p className=''> {post.discrption}  </p> </Link>
                        <p className="p">{post.para}</p>
                        </div>
 


                            
                        </body>
                    )
                })
            }
        </body>
           
        </>
        </div>
    );
}
