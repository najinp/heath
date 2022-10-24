import React from 'react'
import { Link } from 'react-router-dom'
import Subscribe from './Subscribe'

const Sub06 = ({ content }) => {
  const num = 5
  return (
    <section className="Subpage Subpage06">
      <div className="nav__bar">
        <div className="inner">
          <Link to="/">홈으로 </Link> / {content[num].name}
        </div>
      </div>

      <div className="inner">
        <h2>우리의 이야기를 제일 먼저 만나보세요.</h2>
        <Subscribe />
        {/* <ul className="sub__left">{content[num].multimenu}</ul>
        <div className="sub__right">
          <div className="subintro">
            <div className="sitxt">
              <span>{content[num].name}</span>
              <h2>{content[num].tit}</h2>
              <p>{content[num].des}</p>
            </div>
            <div className="sipic">
              <img src="heath/assets/img/subt01.jpg" alt="" />
            </div>
          </div>

          <div className="subtab">
            <div className="subtab__inner"></div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Sub06
