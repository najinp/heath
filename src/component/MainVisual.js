import { useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import Logo from './svg/Logo';
import IconA from './svg/IconA';

const SOLUTION = [
    { id: 1, content: "꽃병들", description: "이미 존재하는 아름다움을 디자인하다.", btn: "꽃병 쇼핑하기", link: "/" },
    { id: 2, content: "둥근모양의", description: "다양한 용도로 사용 가능한 그릇", btn: "그릇 쇼핑하기", link: "/" },
    { id: 3, content: "네모모양의", description: "다양한 용도로 사용 가능한 그릇", btn: "그릇 쇼핑하기", link: "/" },


]

const MainVisual = () => {
    const [slideNum, setSlideNum] = useState(0);
    const SLIDE = useRef(null);
    return (
        <section className="mainvisual">
            <div className="container">
                <Slider
                    afterChange={index => setSlideNum(index)}
                    arrows={false}
                    ref={SLIDE}
                    className={'mainvisual_slide'}
                    autoplay={true}
                >
                    {
                        SOLUTION.map((img, idx) => {
                            return (
                                <figure key={img.id} className={slideNum === idx ? 'on' : ''}>
                                    <img src={process.env.PUBLIC_URL + "/assets/img/main0" + img.id + ".jpg"} alt="" />
                                </figure>
                            )
                        })
                    }
                </Slider>
                <div className="box">
                    <div className="content">
                        <div className='tit'>{SOLUTION[slideNum].content}</div>
                        <p>{SOLUTION[slideNum].description}</p>
                        <a href={SOLUTION[slideNum].link} className='cbtn'>{SOLUTION[slideNum].btn}    <IconA /> </a>

                    </div>
                    {/* <div className="num">
                        0{slideNum + 1} <span>/ 0{SOLUTION.length}</span>
                    </div> */}
                </div>
                <div className="arrows">
                    <i className='xi-arrow-left' onClick={() => SLIDE.current.slickPrev()}></i>
                    <i className='xi-arrow-right' onClick={() => SLIDE.current.slickNext()}></i>
                </div>
                <ul className="dots">
                    {
                        SOLUTION.map((dot, idx) => <li
                            key={dot.id}
                            onClick={() => SLIDE.current.slickGoTo(idx)}
                            className={slideNum === idx ? 'on' : ''}
                        >
                            {dot.id}
                        </li>)
                    }
                </ul>
            </div>




        </section>


    )
}

export default MainVisual;