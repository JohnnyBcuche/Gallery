import React, { Component } from 'react';
import axios from 'axios';

import './Gallery.css';

class Gallery extends Component {
    state = {
        albums: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/albums')
        .then(res => {
            const albums = res.data.slice(0,20);
            this.setState({ albums });
        })
    }

    render() {
        return(
            <div className="albums">
                { this.state.albums.map(album => 
                    <div className="album">
                        <h2>{album.title}</h2>
                    </div>
                ) }
            </div>
        )
    }
}

export default Gallery;