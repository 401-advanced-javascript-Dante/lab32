import {useState} from 'react';

const api = 'http://localhost:3009/addnote';
const getApi = 'http://localhost:3009/showall';

const useFetch = (nothing)=>{

  const[readData , setReadData] = useState({});

  const handleGet = async () =>{
    let response = await fetch(getApi);
    let data = await response.json();
    let tempData = Object.assign({},readData);
    tempData = {} ;
    setReadData(tempData);

    let oneMore = Object.assign({},readData) ;

    Object.assign(oneMore ,...[data]);

    setReadData(oneMore);
  };

  const handlePost = async (data) => {
    console.log('did i ??????????', data);
    await fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data), 
    });
    handleGet();
  };

  const handleDelete = async(id , idx) => {

    await fetch(`${getApi}/${id}`, {
      method:'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      }},
    );


    console.log('idx', typeof idx,idx);
    let newNote = Object.assign({},readData);
    console.log('check check check',newNote[idx]);
    delete newNote[idx];
    console.log('after delete', newNote);
    setReadData(newNote);

    console.log('readData', readData);
    // handleGet();
      
  };


  const setReadDataFetch = (id) => {
    id = id.toString();
    let newNote = Object.assign({},readData);
    if(newNote[id].status === 'complete'){
      newNote[id].status = 'incomplete';
    }else{
      newNote[id].status = 'complete';
    }
    setReadData(newNote);
  };


  return[readData , handlePost , handleGet , handleDelete, setReadDataFetch];

};

export default useFetch ;