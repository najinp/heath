import React from 'react'
import { Link } from 'react-router-dom'

const GIFTSZ = [
  { id: '1', tit: '기프트 카드' },
  { id: '2', tit: '주얼리' },
  { id: '3', tit: '꽃병' },
  { id: '4', tit: '특별한 아이템' },
]

const Sub05 = ({ content }) => {
  const num = 4
  return (
    <section className="Subpage">
      <div className="nav__bar">
        <div className="inner">
          <Link to="/">홈으로 </Link> / {content[num].name}
        </div>
      </div>
      <div className="inner subcon">
        <ul className="sub__left">{content[num].multimenu}</ul>
        <div className="sub__right">
          <div className="subintro">
            <div className="sitxt">
              <span>{content[num].name}</span>
              <h2>{content[num].tit}</h2>
              <p>{content[num].des}</p>
            </div>
            <div className="sipic">
              <img src="heath/assets/img/subt05.jpg" alt="" />
            </div>
          </div>

          <div className="giftsz">
            <h2>선물 ​​컬렉션 살펴보기</h2>
            <div className="giftsz__inner">
              {GIFTSZ.map((gi) => {
                return (
                  <figure>
                    <img
                      src={'heath/assets/img/gift0' + gi.id + '.jpg'}
                      alt=""
                    />

                    <div className="gifttxt">
                      <span>FEATURING</span>
                      <h3>{gi.tit}</h3>
                    </div>
                  </figure>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sub05
