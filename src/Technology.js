
import React, { useEffect, useRef, useState } from 'react'
import News from './News';
import './NewsApp.css';
import { Link } from 'react-router-dom';

function NewsApp() {

const [newlist,setnewlist]=useState([]);
const[query,setquery]=useState('technology');


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
  <h1 className='headingh1'>Info📰Vortex</h1>
 
  <form style={{textAlign:'center'}} onSubmit={handlesubmit}>

<div style={{display:'flex'}}>
<input style={{position:'sticky',top: '0',fontFamily:'cursive'}} placeholder='e.g. Science' className='query_input' type='text' ref={queryinputref}/>
<input  className='btn_submit' onClick={handlesubmit} type='submit' value='🔍Search'></input>
</div>
<ul onSubmit={handlesubmit} >
<div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div style={{borderRight:'1px solid #bbb',backgroundColor:' #de1b1b',borderRadius:'3px'}} class="nav-title">
  Hots Topics⏩
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  <div  class="nav-links">
<Link  to="/" className='a'>Home</Link>
<Link to="/sports" className='a'>Sports</Link>
<Link to="/science" className='a'>Science</Link>
<Link to="/entertainment" className='a'>Entertainment</Link>
<Link to="/technology" className='a'>Technology</Link>
<Link to="/bussiness" className='a'>Business</Link>
<Link to="/health" className='a'>Health & Fitness</Link>
  </div>
</div>

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