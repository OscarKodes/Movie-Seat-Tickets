import React, {Component} from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./About.module.css";
import CancelButton from "../CancelButton/CancelButton";

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
                    className={classes.About}
                    style={{
                        transform: this.props.showAbout ? "translateY(0)" : "translateY(100vh)",
                        opacity: this.props.showAbout ? "1" : "0"
                    }}>
                    <CancelButton click={this.props.toggleAbout}/>
                    <h1>About</h1>
                    <div className={classes.AboutText}>
                        <p>This is a MERN stack application created with full CRUD functionality.</p>
                        <p>With this application, seat tickets can be selected from a grid and purchased.</p>
                        <p>The ticket orders may be edited and deleted.</p>
                    </div>
                    <div className={classes.ByLine}>
                        <p>Created by 
                            <a href="https://oscarkodes.work/">
                                <em> Oscar Ko</em>
                            </a>
                        </p>
                        <p class="text-center">
                            <a class="text-decoration-none"
                                href="https://github.com/OscarKodes">
                                <i class="fab fa-github fa-2x"></i>
                            </a>
                            <a class="text-decoration-none"
                                href="https://www.linkedin.com/in/oscar-ko/">
                                <i class="fab fa-linkedin fa-2x"></i>
                            </a>
                        </p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default About;