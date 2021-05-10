import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import './style.css';
import blogPost from '../../assets/data/blog.json'
import imgAbout from '../../assets/blogPostImages/Ax2.jpg'
import { NavLink } from 'react-router-dom';
/**
* @author
* @function SideBar
**/

const SideBar = (props) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {


        const posts = blogPost.data;
        setPosts(posts)

    }, posts);

    return (
        <div className="sidebarContainer">
            <Card style={{ marginBottom: '20px', boxSizing: 'border-box', padding: '20px' }}>
                <div className="cardHeader">
                    <span>About Us</span>

                </div>
                <div className="profileimageContainer">
                    <img src={imgAbout}></img>
                </div>
                <div className="cardBody">
                    <p>My name is Mary, I am a Software developer specialization in front and backend</p>
                </div>
            </Card>
            <Card style={{ marginBottom: '20px', boxSizing: 'border-box', padding: '20px' }}>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>

            </Card>
            <Card style={{ marginBottom: '20px', boxSizing: 'border-box', padding: '20px' }}>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>
                <div className="recentPosts">
                    {
                        posts.map(post => {
                            return (
                                <NavLink to={`/post/${post.id}`}>
<div className="recentPost">
                                    <h3> {post.blogTitle}</h3>
                                    <span>{post.postedOn}</span>
                                </div>
                                </NavLink>
                                
                            );
                        })
                    }



                </div>
            </Card>
        </div>


    )

}

export default SideBar