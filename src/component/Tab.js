import { useState } from "react";

function Tab() {
    const [toggle, setToggle] = useState(1);

    const toggleTabs = (index) => {
        setToggle(index);
    };

    return (
        <section class="Tab">


            <div className="inner">
                <span className='cali'>IN CALIFORNIA SINCE 1948</span>
                <h2>우리가 먹고, 삶을 연결하는 방식을 위한 좋은 디자인</h2>

                <div className="baseroom">
                    <ul class="mark_point">
                        <li class="img01_point" onClick={() => toggleTabs(1)}></li>
                        <li class="img02_point" onClick={() => toggleTabs(2)}></li>
                        <li class="img03_point" onClick={() => toggleTabs(3)}></li>
                        <li class="img04_point" onClick={() => toggleTabs(4)}></li>
                        <li class="img05_point" onClick={() => toggleTabs(5)}></li>
                        <li class="img06_point" onClick={() => toggleTabs(6)}></li>
                    </ul>

                    {/* <div class="img_move">
                    <ul class="tag_info">
                        <li class="tag_card card01">
                            <img src="assets/img/tab_itm01.jpg" alt="product" />
                            <div class="text_box">
                                <p class="title eng">VÅRELD</p>
                                <p class="sub">보렐드</p>
                                <p class="desc">쿠션커버</p>
                                <p class="price">￦ 9,900</p>
                            </div>
                        </li>

                    </ul>
                </div> */}


                </div>

                <ul className="tab_card">
                    <li className={toggle === 1 ? "active-content01" : "none"}>
                        <div className="card_left">
                            <img src="assets/img/tab_itm07.jpg" alt="product" />
                        </div>
                        <div className="card_right">
                            <span className="cal">ACCESSORIES</span>
                            <h4>Bud Vase in Sunflower</h4>
                            <span className="price">35,000원</span>
                        </div>
                    </li>
                    <li className={toggle === 2 ? "active-content02" : "none"}>
                        <div className="card_left">
                            <img src="assets/img/tab_itm08.jpg" alt="product" />
                        </div>
                        <div className="card_right">
                            <span className="cal">ACCESSORIES</span>
                            <h4>Bud Vase in Sunflower</h4>
                            <span>35,000원</span>
                        </div>
                    </li>
                    <li className={toggle === 3 ? "active-content03" : "none"}>
                        <div className="card_left">
                            <img src="assets/img/tab_itm09.jpg" alt="product" />
                        </div>
                        <div className="card_right">
                            <span className="cal">ACCESSORIES</span>
                            <h4>Bud Vase in Sunflower</h4>
                            <span>35,000원</span>
                        </div>
                    </li>
                    <li className={toggle === 4 ? "active-content04" : "none"}>
                        <div className="card_left">
                            <img src="assets/img/tab_itm10.jpg" alt="product" />
                        </div>
                        <div className="card_right">
                            <span className="cal">ACCESSORIES</span>
                            <h4>Bud Vase in Sunflower</h4>
                            <span>35,000원</span>
                        </div>
                    </li>
                    <li className={toggle === 5 ? "active-content05" : "none"}>
                        <div className="card_left">
                            <img src="assets/img/tab_itm11.jpg" alt="product" />
                        </div>
                        <div className="card_right">
                            <span className="cal">ACCESSORIES</span>
                            <h4>Bud Vase in Sunflower</h4>
                            <span>35,000원</span>
                        </div>
                    </li>
                    <li className={toggle === 6 ? "active-content06" : "none"}>
                        <div className="card_left">
                            <img src="assets/img/tab_itm12.jpg" alt="product" />
                        </div>
                        <div className="card_right">
                            <span className="cal">ACCESSORIES</span>
                            <h4>Bud Vase in Sunflower</h4>
                            <span>35,000원</span>
                        </div>
                    </li>

                </ul>
                <img class="back" src="assets/img/tabimg01.jpg" alt="" />

            </div>



        </section>

    );
}

export default Tab;