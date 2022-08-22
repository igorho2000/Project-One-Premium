import '../../App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {TransitionContext} from "../../context"
import Sidebar from './Sidebar';
import {BlogList} from './PostsArray';

export default function Posts(props) {
    function BlogContent(array) {
        var blog = []
        for (let i=0; i<array.length; i++) {
            if (array[i].length === 1) {
                continue
            }
            switch (array[i-1]) {
                case 'p':
                    blog.push(<p style={{display: "inline",}}>{array[i]}<br /><br /></p>)
                    break
                case 's':
                    blog.push(<p style={{display: "inline",}}><strong>{array[i]}</strong></p>)
                    break
                case 'c':
                    blog.push(<p className='bl-caption' style={{display: "inline",}}>{array[i]}<br /><br /></p>)
                    break
                case 'i':
                    blog.push(<img className='bl-blogimage' src={`../../blog/${array[i]}`} />)
                    break
                case 'h':
                    blog.push(<h3 style={{display: "inline",}} class='bl-sectiontitle'>{array[i]}<br /><br /></h3>)
                    break
                case 'z':
                    blog.push(<p style={{display: "inline",}}>{array[i]}</p>)
                    break
                case 'a':
                    blog.push(<a style={{display: "inline",}} href={array[i][0]} target="_blank">{array[i][1]}</a>)
                    break
                case 'v':
                    continue
            }
        }
        return blog
    }
    
    return (
        <div className='ge-infocont'>
          <div className='ge-header'>
            <TransitionContext.Consumer>
              {({toggleTransition}) => (
                <Link to="/blog" onClick={toggleTransition} className='ge-return'>
                  <img src="../icons/icon-back.svg" />
                  <h2 className='ge-return__text'>Back to Blog</h2>
                </Link>
              )}
            </TransitionContext.Consumer>
            <div>
                <h1 className='ge-header__title bl-posttitle'>{props.info.title}</h1>
                <h4 className='bl-infocard__tag' style={{width: "fit-content", marginBottom: "0.2rem"}}>{props.info.type}</h4>
                <p>{props.info.date}</p>
            </div>
          </div>
          <div bl-content>
            <img className='bl-blogimage' src={`../../blog/${props.info.banner}`} /><br /><br />
            {BlogContent(props.info.content)}
          </div>
          <Sidebar />
        </div>
    );
}