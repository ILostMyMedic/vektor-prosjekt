import React, { Component } from 'react'


export default class Kontakt extends Component {
    render() {
        window.scrollTo(0, 0);

        return (
            <React.Fragment>
                <main className="main">
                    <section>
                        <h1>Kontakt oss</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex aspernatur optio ad libero commodi atque possimus dolor incidunt doloremque. Rem itaque ea consequatur veniam accusamus perspiciatis, officiis quaerat architecto dolorum.
                        Hic ab officiis error in eos velit! Expedita impedit tenetur eveniet? Corporis inventore sunt consequuntur molestiae tempore expedita, omnis facilis iure eligendi, architecto, rerum iste voluptatibus ipsa corrupti quidem nesciunt.
                        Eveniet ducimus obcaecati saepe itaque ut voluptatibus illo facere minima corporis quo cum, dolorem, explicabo quod beatae reprehenderit. Et cumque optio iusto vero velit repellat excepturi eum, officia ducimus laborum.
                        Numquam ex maiores placeat magni corporis quos velit cupiditate sit odit mollitia, voluptates fuga eligendi consequatur quod illum vel dolore nemo. Nihil eveniet error inventore culpa unde accusamus quam sequi!</p>


                        <div className="kontakt-grid">
                            <span className="kontakt-grid-column">
                                <div className="icon">
                                    <i className="fal fa-comments"></i>
                                </div>
                                <p>
                                    Fortell oss litt om hva du ønsker eller hva du trenger, Så fikser vi resten.
                                </p>
                            </span>

                            <span className="kontakt-grid-column">
                                <div className="icon">
                                    <i className="fal fa-box"></i>
                                </div>
                                <p>
                                    Vi leverer og monterer varene så snart dem er ute av produksjon.
                                </p>
                            </span>

                            <span className="kontakt-grid-column">
                                <div className="icon">
                                    <i className="fal fa-thumbs-up"></i>
                                </div>
                                <p>
                                    Øk motivasjonen og sikkerheten for din kunder og koleger før noe går galt.
                                </p>
                            </span>
                        </div>
                    </section>
                </main>
            </React.Fragment>
        )
    }
}
