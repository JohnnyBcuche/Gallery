import React, { Component } from 'react';
import axios from 'axios';

class Posts extends Component {
    state = {
        articles: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            const articles = res.data;
            this.setState({ articles });
        })
    }

    render() {
        return(
            <div>
                { this.state.articles.map(article => 
                    <div>
                        <h2>{article.title}</h2>
                        <p>{article.body}</p>    
                    </div>
                ) }
            </div>
        )
    }
}

export default Posts;