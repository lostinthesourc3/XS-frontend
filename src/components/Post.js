import React from 'react'

class Post extends React.Component{
    render(){
        console.log("POST PROPS:", this.props.post)
        return(
            <div>
                {this.props.post.media}<br/>
                {this.props.post.title}<br/>
                {this.props.post.tag}<br/>
                {this.props.post.name}<br/>
                {this.props.post.created_at}<br/>
                {this.props.post.text}<br/>
            </div>
        )
    }
}

export default Post