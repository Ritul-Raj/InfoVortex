
// import React from 'react'
// import './News.css';
// function News(props) {
//   return (
//     <div className="news_card">
//     <img src={props.newsdata1.urlToImage} alt={props.newsdata1.title}/>
//     <h3>{props.newsdata1.title}</h3>
//     <p>{props.newsdata1.description}</p>
//     <button  className='btn_readmore' onClick={()=>window.open(props.newsdata1.url)}>Read More</button>
//     </div>
//   )
// }

// export default News


import React from 'react'
import './News.css';
function News(props) {
  return (
    <div className="news_card">
    <img src={props.newsdata1.image} alt={props.newsdata1.title}/>
    <h3>{props.newsdata1.title}</h3>
    <p>{props.newsdata1.description}</p>
    <button  className='btn_readmore' onClick={()=>window.open(props.newsdata1.url)}>Read More</button>
    </div>
  )
}

export default News