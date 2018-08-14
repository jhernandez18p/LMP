import React, { Component } from 'react';

class FAQ extends Component {
    componentDidMount() {
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }
    };
    render() {
        return(
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column">
                            <div className="accordions">
                                <button className="accordion">¿Hacen Trade-in?</button>
                                <div className="panel">
                                    <p>Si, es proceso está sujero a una evaluacion previa. Para mayor información puede llamarnos a nuestros números de contacto.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default FAQ;