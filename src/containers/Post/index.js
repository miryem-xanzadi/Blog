import React from 'react';
import BlogPost from '../../components/BlogPost';
import SideBar from '../../components/SideBar';
import Card from '../../components/UI/Card';
import './style.css';

/**
* @author
* @function Post
**/

const Post = (props) => {
  console.log(props);
  return (
    <section className="container">
      <BlogPost {...props} />
      <SideBar/>

    </section>
  )

}

export default Post;