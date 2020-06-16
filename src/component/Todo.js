import React, { Component } from 'react'
import Header from './Header'
import About from './About'
import Whychoose from './Whychoose'
import Footer from './Footer'
import DemoFetchAPI from './DemoFetchAPI'

export default class Todo extends Component {

    render() {
        return (
            // name="Quyet" abc="fvfv"
            <div>  
                <Header/>
                <About/>
                <Whychoose/>
                <Footer/>
            </div>
        )
    }
}


