import React, { Component } from 'react'


export default class Content extends Component {
    showAlert(){
        alert("Bạn đã nhập:  .... ")
    }
    render() {
        return (
            <div>
                
                <form action="">
                    <input type="text" placeholder="nhập chi đó"/>
                    <button variant="danger" onClick={this.showAlert}>Submit</button>
                </form>
                  
            </div> 
        )
    }
}
