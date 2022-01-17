import React from "react";
class Portfolio extends React.Component {
    constructor() {
        super();
    }
    render() {
        const cards = [
            { imagesrc: "https://cdn.dribbble.com/users/2125046/screenshots/17283467/media/851bc54a54c7a18180b992ac4fc57846.png?compress=1&resize=1200x900&vertical=top" },
            { imagesrc: "https://cdn.dribbble.com/users/8726077/screenshots/17283292/media/d322b390e45bb5d71b6d49bcab462aae.png?compress=1&resize=1200x900&vertical=top" },
            { imagesrc: "https://cdn.dribbble.com/users/2151039/screenshots/17284060/media/ea697d8c02f053791645777a7fafea3a.jpg?compress=1&resize=1200x900&vertical=top" },
            { imagesrc: "https://cdn.dribbble.com/users/2151039/screenshots/17284060/media/ea697d8c02f053791645777a7fafea3a.jpg?compress=1&resize=1200x900&vertical=top" },
            { imagesrc: "https://cdn.dribbble.com/users/7682426/screenshots/17283053/media/1b164d94777c2ff9ec1761eea0ad8145.png?compress=1&resize=1200x900&vertical=top" },
            { imagesrc: "https://cdn.dribbble.com/users/6077763/screenshots/17283113/media/a1fadb6cdd0cbc54c33b4bcec3f32dfc.png?compress=1&resize=1200x900&vertical=top" }
        ]
        return (
            <section className="fourthsection container py-4 ">
                <h3 className="display-5">Portfolio</h3>
                <div className="container py-5 d-flex row ">
                    {cards.map((element) => {
                        return (
                            <div className="card col-3 mx-5 mb-5" >
                                <img src={element.imagesrc}></img>
                            </div>);
                    })}
                </div>

            </section>
        )


    }
}
export default Portfolio;