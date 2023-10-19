
import React, { useEffect, useRef, useState } from 'react'
import News from './News';
import './NewsApp.css';
import { Link } from 'react-router-dom';

function NewsApp() {

const [newlist,setnewlist]=useState([]);
const[query,setquery]=useState('sports');



// const api_url=`https://gnews.io/api/v4/top-headlines?category=${query}&lang=en&country=in&max=10&apikey=68e87169219d1088414fc385fb28887b`;
const api_url=`https://gnews.io/api/v4/top-headlines?category=${query}&lang=en&country=in&max=10&apikey=b66dac9165441eaa71a59fc08f66dafe`;

const queryinputref=useRef(null);

  useEffect(()=>{ fetchdata(); },[query]) 

  async function fetchdata(){
      try{
            const response =await fetch(api_url);
            const jsondata=await response.json();
            setnewlist(jsondata.articles);
      }
      catch(e){
        alert("Kuch TO GadBad Haii 👀");
      }
  }
  function handlesubmit(event){
    event.preventDefault();
   const queryvalue=queryinputref.current.value;
   setquery(queryvalue);
  }

return (

  <div className='news_app'>
  <h1 className='headingh1'>News📰Daily</h1>
 
  <form style={{textAlign:'center'}} onSubmit={handlesubmit}>

<div style={{display:'flex'}}>
<input style={{position:'sticky',top: '0',fontFamily:'cursive'}} placeholder='e.g. Science' className='query_input' type='text' ref={queryinputref}/>
<input  className='btn_submit' onClick={handlesubmit} type='submit' value='🔍Search'></input>
</div>
<ul onSubmit={handlesubmit} >
  <li  style={{borderRight:'1px solid #bbb',backgroundColor:' #de1b1b'}}><a href='#'>Latest News :</a></li>

 
  <li style={{borderRight:'1px solid #bbb',backgroundColor:'rgb(15, 24, 163)'}} className='navbarnews'  ><Link to="/" className='a'>Home</Link></li>

  <li className='navbarnews'  ><Link to="/sports" className='a'>Sports</Link></li>
  <li className='navbarnews '  ><Link to="/science" className='a'>Science</Link></li>
  <li className='navbarnews' ><Link to="/entertainment" className='a'>Entertainment</Link></li>
  <li className='navbarnews'  ><Link to="/technology" className='a'>Technology</Link></li>
  <li className='navbarnews' ><Link to="/bussiness" className='a'>Business</Link></li>
  <li className='navbarnews' ><Link to="/health" className='a'>Health & Fitness</Link></li>

</ul>

<br></br> 
  
  </form>
  <div style={{display:'grid',gridTemplateColumns:'repeat(2,48%)',justifyContent:'space-between',rowGap:'20px'}} >
  {newlist?.map(newsdata=>{
      return< News key={newsdata.url} newsdata1={newsdata}></News> 
  
  } ) }</div>
   </div>);
}
  

export default NewsApp;