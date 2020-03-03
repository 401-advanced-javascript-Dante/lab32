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

    console.log('one more ', oneMore);
    console.log('ReadData:', readData);
    console.log('response:', data);


    // setReadData

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


  return[readData , handlePost , handleGet];

};

export default useFetch ;