import React, { useState,useEffect } from 'react';
import Card from '../UI/Card';
import './style.css';
import blogPost from '../../assets/data/blog.json'
import imgePost from '../../assets/blogPostImages/memories-from.jpg';
/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {
    const [post, setPost] = useState({
        id: "" ,
        blogCategory: "" ,
        blogTitle : "" ,
        postedOn: "" ,
        author: "" ,
        blogImage: "" ,
        blogText: ""
    });
    const [id, setId] = useState('');
    
    
    useEffect(() => {
        const id = props.match.params.postId;
        setPost( blogPost.data.find(post => post.id == id));
        
        
        setId(id)
    }, [post, props.match.params.postId]);

    if(post.blogImage == "") return null;
    const photo = require(`../../assets/blogPostImages/${post.blogImage}`).default;
    return (
        <div className="blogPostContainer">
            <Card>
                <div className="blogHeadr">
                    <span className="blogCategory">   {post.blogCategory}   </span>
                    <h1 className="postTitle">{post.blogTitle}</h1>
                    <span className="postedBy"> post on {post.postedOn} By {post.author}</span>
                </div>
                <div className="postimageContainer">
                    <img src={photo} alt="Post Image" />
                </div>
                <div className="postContent">
                    <h3>{post.blogTitle}</h3>
                    <p>{post.blogText}</p>
                </div>
            </Card>
        </div>

    )

}

export default BlogPost