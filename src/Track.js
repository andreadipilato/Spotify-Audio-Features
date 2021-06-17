import React, {Component} from 'react';
import './Track.css';

class Track extends Component {
    constructor(props) {
        super(props);

    }

    giveId = () => {
        //console.log(this.props.id);
        this.props.features(this.props.id);
    }


    render() {
        return (
        <React.Fragment>
            <li onClick={this.giveId}>
                <img class="coverstyle" src={this.props.cover} alt="cover"></img>
                <div className="infostyle">
                    <div className="titlestyle">{this.props.title}</div>
                    <div className="artiststyle">{this.props.artist}</div>
                </div>
            </li>
        </React.Fragment>

            
        );
    }


}
export default Track;
