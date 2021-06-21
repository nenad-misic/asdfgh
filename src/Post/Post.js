import React, {Component} from 'react';
import axios from 'axios';
import { dummy_post } from '../Environment/environment';

import {Link} from 'react-router-dom';


class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
    };
  }

  async componentDidMount() {
    // const { match: { params } } = this.props;
    // post_id = params.post_id

    this.setState({
      post: dummy_post,
    });
  }

  find_hashtags(description) {
    let words = description.split(' ');
    let mapped = words.map( e => e[0] == '#' ? ( <Link to="/" className="nounderline"> {e} </Link> ) : ( <span> {e} </span> ))
    return mapped
  }

  commas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    const { post } = this.state;
    if (post === null) return <p>Loading post ...</p>;
    return (
        <div className="col-6 offset-3g border border-light">
            <div className="col-12 px-4 py-3">
                <img className="round wh-30 mx-2" src={post.image_link}></img>
                <Link class="mx-2 text-dark nounderline bold" to="/">{post.username}</Link>
            </div>
            <div className="col-12">
                <img className="post-image" src={post.image_link}></img>
            </div>
            <div className="col-12 px-4 py-3 d-flex justify-content-between">
                <div>
                    <i class="mx-1 text-dark far fa-thumbs-up fa-2x like-hover"></i>
                    <i class="mx-1 text-dark far fa-thumbs-down fa-2x dislike-hover"></i>
                    <i class="mx-1 text-dark far fa-comment fa-2x comment-hover"></i>
                </div>
                <div>
                    <i class="mx-1 text-dark far fa-bookmark fa-2x bookmark-hover"></i>
                </div>
            </div>
            <div className="col-12 px-4 py-1">
                <div>{this.commas(post.likes)} likes</div>
                <div>{this.commas(post.dislikes)} dislikes</div>
            </div>
            <div className="col-12 px-4">
                <Link class="text-dark nounderline bold" to="/">{post.username}</Link>
                <span class="mx-2">{this.find_hashtags(post.description)}</span>
            </div>
        </div>
    )
  }
}

export default Post;