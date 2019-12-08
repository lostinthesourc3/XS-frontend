import React from 'react'
import axios from 'axios'
import Post from '../components/Post'

const POSTS = "http://localhost:3001/posts"

class PostsContainer extends React.Component{
    state = {
        data: []
    }

    // Fetch posts
    componentDidMount(){
        axios.get(POSTS)
            .then(res => {
                console.log("RESPONSE:", res.data)
                this.setState({
                    data: res.data
                })
            })
            .catch(error => {
                console.log("ERROR:",error.response)
            })
    }

    render(){
        // console.log("STATE:", this.state.data)
        let posts = this.state.data.map(post => <Post key = {post.created_at} post = {post} />)
        return(
            <div>
                {posts}
            </div>
        )
    }
}

export default PostsContainer