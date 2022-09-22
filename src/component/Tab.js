import { useState } from "react";

function Tab() {


    return (
        <section class="Tab">


            <div className="inner">
                <span className='cali'>IN CALIFORNIA SINCE 1948</span>
                <h2>우리가 먹고, 삶을 연결하는 방식을 위한 좋은 디자인</h2>

                <div className="baseroom">
                    <ul class="mark_point">
                        <li class="img01_point"></li>
                        <li class="img02_point"></li>
                        <li class="img03_point"></li>
                        <li class="img04_point"></li>
                        <li class="img05_point"></li>
                        <li class="img06_point"></li>
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

                    <img class="back" src="assets/img/tabimg01.jpg" alt="" />
                </div>

                <ul className="tab_card">
                    <li className="card01">
                        <div className="card_left">
                            <img src="assets/img/tab_itm07.jpg" alt="product" />
                        </div>
                        <div className="card_right">
                            <span className="cal">ACCESSORIES</span>
                            <h4>Bud Vase in Sunflower</h4>
                            <span>35,000원</span>
                        </div>
                    </li>
                </ul>

            </div>



        </section>

    );
}

export default Tab;