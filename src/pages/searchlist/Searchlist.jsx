import React from 'react'
import "./searchlist.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { Navbar } from '../../components/navbar/Navbar'
import { Container } from '../../components/container/Container'
export const Searchlist = () => {
  return (
    <div>
       
        <div className="listContainer">
        <div className="listWrapper">
        
            <div className="listSearch">
            <div >
            <span>
                <h className="listTitle">Top  Repository</h>
                <button className='listSearchbutton' >New</button>
            </span>
            </div>
            <div>
            <input placeholder='Find a repository'/>
            </div>
                
                <div className="listOptions">
                <FontAwesomeIcon icon={faCircleUser}/>
                <label>User/RepositoryName</label>
                </div>
                <div className="listOptions">
                <FontAwesomeIcon icon={faCircleUser}/>
                <label>User/RepositoryName</label>
                </div>
                <div className="listOptions">
                <FontAwesomeIcon icon={faCircleUser}/>
                <label>User/RepositoryName</label>
                </div>
               
                <h>Recent activity</h>
                <br/>
                
       <input placeholder='When you take actions across GitHub, we’ll provide links to that activity here.'></input>
           
              
            </div>
                
             
            <div className="listResult">
        <Navbar/>
           <Container/>
            </div>
            
                </div>
           
           
        </div>
    </div>
   
   
  )
}
