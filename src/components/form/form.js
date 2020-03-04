/* eslint-disable no-unused-vars */
import React from 'react';
import {useState , useEffect} from 'react';
import useFetch from '../../hooks/useFetch.js';


let once = 0 ;

const Form = () => {

  let temp ;
  const [readData, handlePost, handleGet , handleDelete,setReadDataFetch] = useFetch(temp);
  
  if(once === 0){
    handleGet();
    once++ ;
  } 
    

  let handleSubmit = (e) => {
    e.preventDefault();    
    let name = e.target.name.value;
    let note = e.target.note.value;
    let status = e.target.status.value;
    let diff = e.target.difficulty.value;
    
    let newNote = {'name' : name , 'note': note , 'status':status , 'diff': diff};
    // take the data from here to post it <====   
    handlePost(newNote);

    e.target.reset();
  };


  useEffect(()=>{

    let id = Object.keys(readData).length.toString() ;

    if(id > 0){
      document.title = `${id} Todo left`;
    }
  });


  let changeState = (id) =>{
    setReadDataFetch(id);
  };

  let deleteState = (_id,idx) => {
    handleDelete(_id, idx);
  };


  return(
    
    <>
      {/* {console.log('**render**', readData , noteBook)} */}

      <div>
        <form onSubmit = {handleSubmit}>

          <label>
        Name : 
            <input name="name" />
          </label>

          <br/>

          <label>
        Note :
            <textarea name="note"  />
          </label>

          <br/>

          <label>complete
            <input type="radio" name="status" value="complete" />
          </label>
          <label>Incomplete
            <input type="radio" name="status" value="Incomplete" />
          </label>

          <br/>

          <label>difficulty:
            <select name= "difficulty">
              <option value ="1">1</option>
              <option value ="2">2</option>
              <option value ="3">3</option>
              <option value ="4">4</option>
              <option value ="5">5</option>
            </select>
          </label>

          <br/>
          <button type="submit" id="sub">Submit</button>

        </form>
      </div>

      <br/>

      <div>
        <h2>ToDo List:</h2>
        <ul>
          {/* <li>{noteBook}</li> */}
          
          {/* {console.log('boook' , readData)} */}
          { 
            Object.keys(readData).map((val, idx) => {
              return<fieldset key={idx} className={readData[val].status} > <legend>Name: {readData[val].name}</legend>
                <p> ToDo: {readData[val].note} </p>
                <li onClick={()=> changeState(idx)}> Status: {readData[val].status} </li>
                <li> Difficulty: {readData[val].diff} </li>
                <button onClick={()=> deleteState(readData[val]._id , idx)} >Delete</button>
                
              </fieldset>;
            })}



        </ul>
      </div>

    </>

  );
};


export default Form ;
