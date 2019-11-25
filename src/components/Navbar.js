import React from "react";
import { Link } from "gatsby";

const Navbar = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            navBarActiveClass: ""
        };
    }

    render() {
        return (
            <nav
                className="navbar is-transparent"
                role="navigation"
                aria-label="main-navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <Link to="/" className="navbar-item" title="Logo">
                            <h1>Old Man's Forest</h1>
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }
};

export default Navbar;
