import React, {Component} from 'react';
import './Features.css';


class Features extends Component {
/*  constructor(props) {
        super(props);

    }
*/

    convertKey = (key) => {
        var convert_key = "";
        switch(key) {
            case 0:
                convert_key = "C"
                break;
            case 1:
                convert_key = "C#"
                break;
            case 2:
                convert_key = "D"
                break;     
            case 3:
                convert_key = "D#"
                break;     
            case 4:
                convert_key = "E"
                break;  
            case 5:
                convert_key = "F"
                break;
            case 6:
                convert_key = "F#"
                break; 
            case 7:
                convert_key = "G"
                break;    
            case 8:
                convert_key = "G#"
                break;     
            case 9:
                convert_key = "A"
                break;         
            case 10:
                convert_key = "A#"
                break;    
            case 11:
                convert_key = "B"
                break;   
            default:
                convert_key = ""; 
        
        }
        return convert_key;
    }

    convertMode = (mode) => {
        var convert_mode = "";
        switch(mode) {
            case 0:
                convert_mode = "m"
                break;
            default: convert_mode = "";
        }
        return convert_mode;
    }

    convertPercent = (n) => {
        return Math.round(n*100);
    }




    render() {
        return (
            <div className = "features_style">

                <table>
                    <tr>
                        <th>Features</th>
                        <th>#</th>
                    </tr>
                    <tr>
                        <td>Key</td>
                        <td>{this.convertKey(this.props.tonalità)}{this.convertMode(this.props.modo)}</td>
                    </tr>
                    <tr>
                        <td>BPM</td>
                        <td>{Math.round(this.props.bpm)}</td>
                    </tr>
                    <tr>
                        <td>Loudness</td>
                        <td>{this.props.loud}</td>
                    </tr>
                    <tr>
                        <td>Energy</td>
                        <td>{this.convertPercent(this.props.energia) + "%"}</td>
                    </tr>
                    <tr>
                        <td>Danceability</td>
                        <td>{this.convertPercent(this.props.danza) + "%"}</td>
                    </tr>
                    <tr>
                        <td>Valence</td>
                        <td>{this.convertPercent(this.props.umore) + "%"}</td>
                    </tr>
                    
                </table>
                   
            </div>

            
        );
    }


}
export default Features;