import React from "react";
import { Link } from "react-router-dom";
import Spinner from '../Spinner';

import "./PostLink.scss";

export default function PostLink(props) {
  const {allData, dark}= props;
  const data = allData.data.body;
  // const data = datas.reverse()
  return (
  <div className={`post-list ${dark}`}>
    <h2>Ultimos Posts</h2>

    {!allData.loading ?
   
      data.slice(0).reverse().map((post,index)=>{
      return  <Link key={index} to={`/blog/${post._id}`}>
       <div className="post-list__link">
          <div>
            <p>{post.title}</p>
          </div>
              <div className="post-list__link-tags"> 
             
                {  post.tags.map((tag, index) => {
                    const classTag = () => {
                      if (tag === "javascript") {
                        return "post-list__link-tags-js";
                      } else {
                        return "post-list__link-tags-rc";
                      }
                    };
                    return (
                      <p className={classTag()} key={index}>
                        {tag}
                      </p>
                    );
                  })}
              </div>
    </div>
    </Link> 
      } 
      ):
      <Spinner/>
    }
    {/* <Link to={`/blog/${id}`}>
    <div className="post-list__link">
      <div>
        <p>{title}</p>
      </div>
      <div className="post-list__link-tags"> 
      {!allData.loading &&
          data[0].tags.map((tag, index) => {
            const classTag = () => {
              if (tag === "javascript") {
                return "post-list__link-tags-js";
              } else {
                return "post-list__link-tags-rc";
              }
            };
            return (
              <p className={classTag()} key={index}>
                {tag}
              </p>
            );
          })}
      </div>
    </div>
    </Link> */}

    </div>
  );
}
