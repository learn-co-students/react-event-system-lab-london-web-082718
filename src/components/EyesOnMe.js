// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {
    constructor() {
        super();
        this.state= {
          regarde: false
        }
    }

    handleClick= () => {
        this.setState({regarde: !this.state.regarde})
        if (!this.state.regarde){
            console.log('Good!')
        } 
        else {
            console.log('Hey! Eyes on me!')
        }
    };

    render(){
        return <button onClick={this.handleClick}>{!this.state.regarde ? "Focus"  : "Blur" }</button>
    }
}

export default EyesOnMe