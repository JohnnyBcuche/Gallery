import React, { Component } from 'react';
import axios from 'axios';

import './Gallery.css';

class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            albums: [],
            visible: 5
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
    }

    render() {
        return(
            <div>
                <div className="albums">
                    { this.state.albums.slice(0, this.state.visible).map(album => 
                        <div key={album.id} className="album">
                            <h2>{album.title}</h2>
                        </div>
                    ) }
                </div>
                {this.state.visible < this.state.albums.length &&
                    <div className="parent-button">
                        <button onClick={this.loadMore} className="button" type="button">Load more</button>
                    </div>
                }
            </div>
        )
    }
}

export default Gallery;