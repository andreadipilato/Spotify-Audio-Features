import React, {Component} from 'react';
import './Cerca.css';

class Cerca extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {cerca: ""};   //stato iniziale
    }

    //il compito di questo gestore evento è quello di farmi visualizzare ciò che scrivo nella barra di ricerca
    onInputChange = e => {
        this.setState({cerca: e.target.value})
    }
    
    searchElement = e => {
        e.preventDefault();
        //alert("Stai cercando: "+this.state.cerca);
        this.props.onInputSearch(this.state.cerca);
        this.setState({cerca: ""});
    }

    onFocus = (e) => {
        e.target.blur();
    }

    render() {
        return (   
            <div className="searchbar">         
                <form className = "form-inline" onSubmit = {this.searchElement}>
                    <input 
                        className = "search" 
                        type = "text" 
                        name = "search"
                        placeholder = "Search a track" 
                        aria-label = "Search"
                        value = {this.state.cerca} //visualizza il contenuto di cerca
                        onChange = {this.onInputChange}
                    />  
                   
                    <button className = "btn" type="submit" onFocus = {this.onFocus}><i class="material-icons">search</i></button>
                </form>
            </div>  
        );
    }
}
export default Cerca;