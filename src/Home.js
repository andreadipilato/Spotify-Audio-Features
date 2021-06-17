import React, {Component} from 'react';
import './Home.css';
import Cerca from './Cerca';
import Features from './Features';
import Track from './Track';




class Home extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {  listatracce: [], msgError: null, visibility: false,
                        danceability: null,
                        energy: null,
                        key: null,
                        mode: null,
                        tempo: null,
                        loudness: null,
                        valence: null  
                                
                    };
    }

    searchTrack = (searchtrack) => {
        const accessToken = this.props.mytoken;
        //console.log("Chiamata con token: " + accessToken);
        const apiUrl = 'https://api.spotify.com/v1/search?q=' + searchtrack + '&type=track&limit=1';
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ accessToken
            }
        })      
        .then(response => {
            response.json().then(
                (data) => { 
                    console.log(data);                                
                    this.setState({listatracce: data.tracks.items,
                                    visibility: false
                    })  
                //    console.log(this.state.listatracce);                     
                }
            )
            .catch((error) => {
                console.log("NO SEARCH QUERY", error);
                this.setState({msgError: error.message});
            });
        })
        
              
    }

    getFeatures = (id) => {
        const accessToken = this.props.mytoken;
        const apiUrl = 'https://api.spotify.com/v1/audio-features/' + id;
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ accessToken
            }
        })
        .then(response => {
            response.json().then(
                (data) => {
                    console.log(data);
                    this.setState({danceability: data.danceability,
                                   energy: data.energy,
                                   key: data.key,
                                   mode:data.mode,
                                   tempo: data.tempo,
                                   loudness: data.loudness,
                                   valence: data.valence,
                                   visibility: true
                 
                    })
                    
                }
            )
        })

    }

    render() {
        return(
            <div className="Home">
                <Cerca onInputSearch = {this.searchTrack} />
                <div className="containertrack">
                    <ul className="list-group">
                    {this.state.listatracce.map((item, index) => 
                    <Track  id={item.id} 
                            key={index}
                            title={item.name} 
                            artist={item.artists[0].name} 
                            cover={item.album.images[0].url} 
                            features={this.getFeatures} 
                    />
                        )
                    }
                    </ul>
                </div>
            
            {this.state.visibility == true ? <Features
                    tonalità={this.state.key} 
                    modo={this.state.mode}
                    bpm={this.state.tempo}
                    danza={this.state.danceability}
                    energia={this.state.energy}
                    loud={this.state.loudness}
                    umore={this.state.valence}
                      
                /> : console.log("ciao")}
                
                

            </div>

        );
    }


}

export default Home;