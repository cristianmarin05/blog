
import React from "react";
import {Helmet} from 'react-helmet';
import Side from "../Side";
import useFetch from '../../hooks/useFetch'
import Spinner from '../Spinner'
import { useParams } from "react-router-dom";

import "./Post.scss";

export default function Post(props) {
  const {dark} = props;
  const {id} = useParams();
   const allData = useFetch(`https://blogservercm.herokuapp.com/post/${id}`);
  const data = allData.data.body;
    if (!allData.loading) {
    var title = Object.keys(data).map((post) => data[post].title);
  }
 
  return (
    <>
    <Helmet>
     <title>{title}</title>
     <meta name="description" content={title} 
          data-react-helmet="true"
        />
    </Helmet>
      <div className={`post ${dark}`}>
        <div className="post__article">
          <div className={`post__title ${dark}`}>
            <h1>{title}</h1>
          </div>
          <div>
          {!allData.loading ? (
              data[0].content.map((item, index) => {
                if (typeof item === "string") {
                  return <p key={index}>{item}</p>;
                } else if (item.title) {
                  return <p key={index} className={`post__title-others ${dark}`}>{item.title}</p>;
                }else if(item.demo){
                  return <a href={item.demo} target="_blank">Demo</a>
                } else {
                  return <div className="post__article-img"><img key={index} src={`https://cristianmarin.netlify.app/${item.image}`} alt="foto" /></div>
                }
              })
            ) : (
              <Spinner />
            )}
          </div>
        </div>
        <div className="post__side">
          <Side allData={allData} dark={dark}/>
        </div>
      </div>
    </>
  );
}
