import React from 'react';
import Axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {

    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await Axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
            Authorization:
                'Client-ID 97fca4a595f11dd6e28d8a757c6e620e32ec63c9a156fd7c364fe9e2a2da620b'
            }
        });
        this.setState({ images: response.data.results });
    }
    
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
            </div>
        );
    }
}

export default App;