import { useState } from "react";


function Habs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="Habs">
            <span>A FEW FAVORITES</span>
            <h2>Good goods worth seeing</h2>
            <div className="habs__container">

                <div className="bloc-habs">
                    <button
                        className={toggleState === 1 ? "habs active-habs" : "habs"}
                        onClick={() => toggleTab(1)}
                    >
                        Coupe
                    </button>
                    <button
                        className={toggleState === 2 ? "habs active-habs" : "habs"}
                        onClick={() => toggleTab(2)}
                    >
                        Chez Panisse
                    </button>
                    <button
                        className={toggleState === 3 ? "habs active-habs" : "habs"}
                        onClick={() => toggleTab(3)}
                    >
                        Rim
                    </button>
                    <button
                        className={toggleState === 4 ? "habs active-habs" : "habs"}
                        onClick={() => toggleTab(4)}
                    >
                        Alabama Chanin
                    </button>
                </div>

                <div className="content-habs">
                    <div
                        className={toggleState === 1 ? "habcontent  active-habcontent" : "habcontent"}
                    >
                        <div className="habs_contents">
                            <figure>
                                <img src='assets/img/coupe01.jpg' alt=""></img>
                                <span>Dinner Plate</span>
                                <span>Coupe Line</span>
                                <span>9 Colors / $44.00</span>
                            </figure>
                            <figure>
                                <img src='assets/img/coupe02.jpg' alt=""></img>
                            </figure>
                            <figure>
                                <img src='assets/img/coupe03.jpg' alt=""></img>
                            </figure>
                            <figure>
                                <img src='assets/img/coupe04.jpg' alt=""></img>
                            </figure>
                            <figure>
                                <img src='assets/img/coupe05.jpg' alt=""></img>
                            </figure>
                            <figure>
                                <img src='assets/img/coupe06.jpg' alt=""></img>
                            </figure>

                        </div>

                    </div>

                    <div
                        className={toggleState === 2 ? "habcontent  active-habcontent" : "habcontent"}
                    >
                        <div className="habs_contents">
                            <figure>
                                <img src='assets/img/chez01.jpg' alt=""></img>
                            </figure>
                            <figure>
                                <img src='assets/img/chez02.jpg' alt=""></img>
                            </figure>
                            <figure>
                                <img src='assets/img/chez03.jpg' alt=""></img>
                            </figure>
                            <figure>
                                <img src='assets/img/chez04.jpg' alt=""></img>
                            </figure>
                            <figure>
                                <img src='assets/img/chez05.jpg' alt=""></img>
                            </figure>
                            <figure>
                                <img src='assets/img/chez06.jpg' alt=""></img>
                            </figure>
                        </div>

                    </div>

                    <div
                        className={toggleState === 3 ? "habcontent  active-habcontent" : "habcontent"}
                    >
                        <div className="habs_contents">
                            <figure>
                                <img src='assets/img/rim01.jpg' alt=""></img>
                            </figure>
                            <figure>
                                <img src='assets/img/rim02.jpg' alt=""></img>
                            </figure>
                            <figure>
                                <img src='assets/img/rim03.jpg' alt=""></img>
                            </figure>
                            <figure>
                                <img src='assets/img/rim04.jpg' alt=""></img>
                            </figure>
                            <figure>
                                <img src='assets/img/rim05.jpg' alt=""></img>
                            </figure>
                            <figure>
                                <img src='assets/img/rim06.jpg' alt=""></img>
                            </figure>
                        </div>

                    </div>
                    <div
                        className={toggleState === 4 ? "habcontent  active-habcontent" : "habcontent"}
                    >
                        <div className="habs_contents">
                            <figure>
                                <img src='assets/img/alabama01.jpg' alt=""></img>

                            </figure>
                            <figure>
                                <img src='assets/img/alabama02.jpg' alt=""></img>
                            </figure>
                            <figure>
                                <img src='assets/img/alabama03.jpg' alt=""></img>
                            </figure>
                            <figure>
                                <img src='assets/img/alabama04.jpg' alt=""></img>
                            </figure>
                            <figure>
                                <img src='assets/img/alabama05.jpg' alt=""></img>
                            </figure>
                            <figure>
                                <img src='assets/img/alabama06.jpg' alt=""></img>
                            </figure>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    );
}

export default Habs;
