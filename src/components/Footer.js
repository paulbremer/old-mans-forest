import React from "react";
import { Link } from "gatsby";

const Footer = class extends React.Component {
    render() {
        return (
            <footer
                className="footer has-background-black has-text-white-ter"
                style={{
                    textAlign: "center",
                    padding: "3rem auto",
                    marginTop: "2rem"
                }}>
                OLD MAN'S FOREST 🌲
            </footer>
        );
    }
};

export default Footer;
