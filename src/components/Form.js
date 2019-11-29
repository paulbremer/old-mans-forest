import React from "react";
import {
    PDFDownloadLink,
    Document,
    Page,
    Text,
    Image,
    View,
    StyleSheet
} from "@react-pdf/renderer";

function encode(data) {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
}

const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        backgroundColor: "#fff",
        width: "100%"
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    image: {
        width: "100%",
        padding: 10,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 32
    }
});

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isValidated: false,
            ticketApproved: false,
            errorMessage: ""
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const form = e.target;

        if (
            this.state.personCount !== undefined &&
            this.state.sleepingArea !== undefined
        ) {
            fetch("/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: encode({
                    "form-name": form.getAttribute("name"),
                    ...this.state
                })
            })
                .then(() => this.setState({ ticketApproved: true }))
                .catch(error => alert(error));
        } else {
            this.setState({
                errorMessage: "Je bent een veld vergeten in te vullen."
            });
        }
    };

    render() {
        const { ticketApproved } = this.state;
        return (
            <div className="container is-widescreen margin-top-2">
                {!ticketApproved && (
                    <form
                        name="contact"
                        method="post"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        onSubmit={this.handleSubmit}
                        style={{ maxWidth: "50%", margin: "2rem auto" }}>
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
                            <label className="label" htmlFor={"personCount"}>
                                Hoeveel personen?
                            </label>
                            <div className="control">
                                <div
                                    className="select is-rounded"
                                    style={{ width: "100%" }}>
                                    <select
                                        name={"personCount"}
                                        id={"personCount"}
                                        onChange={this.handleChange}
                                        required={true}
                                        style={{ width: "100%" }}>
                                        <option value="kies-een-optie">
                                            Kies een optie
                                        </option>
                                        <option value="1-persoon">
                                            1 persoon
                                        </option>
                                        <option value="2-personen">
                                            2 personen
                                        </option>
                                        <option value="3-personen">
                                            3 personen
                                        </option>
                                        <option value="4-personen">
                                            4 personen
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label" htmlFor={"sleepingArea"}>
                                Slaapplek
                            </label>
                            <div
                                className="select is-rounded"
                                style={{ width: "100%" }}>
                                <select
                                    name={"sleepingArea"}
                                    id={"sleepingArea"}
                                    onChange={this.handleChange}
                                    required={true}
                                    style={{ width: "100%" }}>
                                    <option value="kies-een-optie">
                                        Kies een optie
                                    </option>
                                    <option value="barn">Barn</option>
                                    <option value="camping">Camping</option>
                                    <option value="geen-overnachting">
                                        Geen overnachting
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div
                            style={{
                                color: "#ff2200"
                            }}>
                            {this.state.errorMessage}
                        </div>

                        <div
                            className="field"
                            style={{
                                margin: "2rem auto",
                                textAlign: "center"
                            }}>
                            <button className="button is-link" type="submit">
                                Koop een ticket! 🎟
                            </button>
                        </div>
                    </form>
                )}

                {ticketApproved && (
                    <div
                        style={{
                            textAlign: "center",
                            border: "2px dashed #000",
                            maxWidth: "50%",
                            margin: "4rem auto",
                            padding: "2rem"
                        }}>
                        <p style={{ marginBottom: "1rem" }}>
                            Download ticket voor {this.state.name}
                        </p>

                        <PDFDownloadLink
                            document={
                                <Document>
                                    <Page size="A4" style={styles.page}>
                                        <View style={styles.image}>
                                            <Image src="https://i.imgur.com/Nl2yyH1.png" />
                                        </View>
                                        <View style={styles.image}>
                                            <Image
                                                style={{ maxHeight: "10cm" }}
                                                src="http://static.2018.lowlands.fabriquehq.nl/media/uploads/froala_editor/images/LowlandsFestival_Sfeer_38_BartHeemskerk_SHQ.jpg"
                                            />
                                        </View>
                                        <View style={styles.section}>
                                            <Text>Tickethouder</Text>
                                            <Text style={{ textAlign: "left" }}>
                                                {this.state.name}
                                            </Text>
                                        </View>
                                        <View style={styles.section}>
                                            <Text>Aantal personen</Text>
                                            <Text style={{ textAlign: "left" }}>
                                                {this.state.personCount}
                                            </Text>
                                        </View>
                                        <View style={styles.section}>
                                            <Text>Slaapplek</Text>
                                            <Text style={{ textAlign: "left" }}>
                                                {this.state.sleepingArea}
                                            </Text>
                                        </View>
                                    </Page>
                                </Document>
                            }
                            fileName="old-mans-forest.pdf">
                            {({ blob, url, loading, error }) =>
                                loading ? (
                                    "Loading document..."
                                ) : (
                                    <button className="button is-link">
                                        Download ticket 🎟
                                    </button>
                                )
                            }
                        </PDFDownloadLink>
                    </div>
                )}
            </div>
        );
    }
}
