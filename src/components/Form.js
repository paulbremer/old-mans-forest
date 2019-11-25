import React from "react";
import { navigate } from "gatsby-link";

function encode(data) {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
}

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isValidated: false };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": form.getAttribute("name"),
                ...this.state
            })
        })
            .then(() => navigate(form.getAttribute("action")))
            .catch(error => alert(error));
    };

    render() {
        return (
            <div className="container is-widescreen margin-top-2">
                <form
                    name="contact"
                    method="post"
                    action="/contact/thanks/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}>
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div hidden>
                        <label>
                            Don’t fill this out:{" "}
                            <input
                                name="bot-field"
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <div className="field">
                        <label className="label" htmlFor={"name"}>
                            Naam
                        </label>
                        <div className="control">
                            <input
                                className="input"
                                type={"text"}
                                name={"name"}
                                onChange={this.handleChange}
                                id={"name"}
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label" htmlFor={"person-count"}>
                            Hoeveel personen?
                        </label>
                        <div className="control">
                            <div className="select is-rounded">
                                <select
                                    name={"person-count[]"}
                                    id={"person-count"}
                                    required={true}>
                                    <option value="1-persoon">1 persoon</option>
                                    <option value="2-persoon">
                                        2 personen
                                    </option>
                                    <option value="3-persoon">
                                        3 personen
                                    </option>
                                    <option value="4-persoon">
                                        4 personen
                                    </option>
                                </select>
                            </div>

                            {/* <input
                                className="input"
                                type={"text"}
                                name={"person-count"}
                                onChange={this.handleChange}
                                id={"person-count"}
                                required={true}
                            /> */}
                        </div>
                    </div>
                    <div className="field">
                        <label>
                            Slaapplek:{" "}
                            <select name="role[]" multiple>
                                <option value="leader">1 persoon</option>
                                <option value="follower">2 personen</option>
                            </select>
                        </label>
                    </div>
                    <div className="field">
                        <label className="label" htmlFor={"sleepingArea"}>
                            Slaapplek
                        </label>
                        <div className="control">
                            <input
                                className="input"
                                type={"text"}
                                name={"sleepingArea"}
                                onChange={this.handleChange}
                                id={"sleepingArea"}
                                required={true}
                            />
                        </div>
                    </div>

                    <p>Download ticket voor </p>

                    {/* <div className="field">
                        <label className="label" htmlFor={"message"}>
                            Message
                        </label>
                        <div className="control">
                            <textarea
                                className="textarea"
                                name={"message"}
                                onChange={this.handleChange}
                                id={"message"}
                                required={true}
                            />
                        </div>
                    </div> */}
                    <div className="field">
                        <button className="button is-link" type="submit">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
