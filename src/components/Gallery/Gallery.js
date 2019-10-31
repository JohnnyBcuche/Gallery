import React, { Component } from 'react';
import axios from 'axios';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './Gallery.css';

class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            albums: [],
            photos: [],
            visible: 5,
            selectAlbum: null
        };
        
        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        this.setState((prev) => {
            return {visible: prev.visible + 5};
        });
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/albums')
        .then(res => {
            const albums = res.data;
            this.setState({ albums });
        })

        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(res => {
            const photos = res.data;
            this.setState({ photos });
        })
    }

    setAlbumState(id) {
        this.setState({ selectAlbum: id });
        // console.log(this.state.selectAlbum)
    }

    render() {
        return(
            <div>
                <div className="items">
                    { this.state.albums.slice(0, this.state.visible).map(album => 
                        <div key={album.id} className="album" onClick={() => this.setAlbumState(album.id)}>
                            <h2>{album.id}. {album.title}</h2>
                        </div>
                    ) }
                </div>
                { this.state.visible < this.state.albums.length &&
                    <div className="parent-button">
                        <button onClick={this.loadMore} className="button" type="button">Load more</button>
                    </div>
                }
                <div className="items">
                    { this.state.photos.map(photo => {
                        if(photo.albumId === this.state.selectAlbum)
                            return(
                                <div className="frame" key={photo.id}>
                                    <img className="photo" src={photo.url} alt="img"/>
                                    <div className="items">
                                        <p><strong>ID:</strong> {photo.id}</p>
                                        <p><strong>Album ID:</strong> {photo.albumId}</p>
                                    </div>
                                </div>
                            );
                        return null;
                    } ) }
                </div>
            </div>
        )
    }
}

export default Gallery;
