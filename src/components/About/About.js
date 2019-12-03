import React, {Component} from "react";
import Backdrop from "../Backdrop/Backdrop";

class About extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.showAbout || nextProps.showAbout !== this.props.showAbout;
    }

    render () {
        return (
            <React.Fragment>
                <Backdrop 
                    show={this.props.showAbout} 
                    clicked={this.props.toggleAbout}/>
                <div
                    style={{
                        transform: this.props.showAbout ? "translateY(0)" : "translateY(100vh)",
                        opacity: this.props.showAbout ? "1" : "0"
                    }}>
                    Fuck
                </div>
            </React.Fragment>
        )
    }
}

export default About;