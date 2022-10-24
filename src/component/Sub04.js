import React from 'react'
import { Link } from 'react-router-dom'

const TILESZ = [
  {
    id: '1',
    tit: '클래식 필드',
    des: '다양한 레이아웃 가능성이 있는 모양과 크기의 광범위한 컬렉션입니다.',
    icon: 'titleicon01.svg',
  },
  {
    id: '2',
    tit: '이중 유약',
    des:
      '각 타일에 두 개의 글레이즈를 적용하여, 듀얼 글레이즈는 설치에 따라 다양한 매혹적인 패턴을 연출합니다.',
    icon: 'titleicon02.svg',
  },
  {
    id: '3',
    tit: '차원',
    des:
      '일부 현대적인 업데이트가 적용된 역사적인 Heath 디자인인 Dimensional은 건축 자재와 예술을 연결하는 조각 디스플레이를 만듭니다.',
    icon: 'titleicon03.svg',
  },
  {
    id: '4',
    tit: '스탠 비터스',
    des:
      '캘리포니아 도예가인 Stan Bitters와 공동으로 제작한 이 촉감과 깊이 있는 질감의 작품은 흙의 흙 같은 특성을 드러냅니다.',
    icon: 'titleicon04.svg',
  },
  {
    id: '5',
    tit: '벽화',
    des: '벽화는 매트와 광택 타일의 사전 구성된 패턴 조합 시리즈입니다.',
    icon: 'titleicon05.svg',
  },
  {
    id: '6',
    tit: '타일 ​​유약',
    des:
      'Heath의 망간 점토 바디에만 독점적으로 설계된 많은 새로운 유약을 포함하여 업데이트된 팔레트를 확인하십시오.',
    icon: 'titleicon06.png',
  },
]

const Sub04 = ({ content }) => {
  const num = 3

  return (
    <section className="Subpage Subpage04">
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
              <img src={process.env.PUBLIC_URL + "/assets/img/subt04.jpg"} alt="" />
            </div>
          </div>
          <div className="tilesz">
            <h2>타일 ​​컬렉션 살펴보기</h2>
            {/* <p>
              Heath의 타일 컬렉션은 각각 고유한 개성과 잠재력을 가지고 있습니다.
              <br />
              다재다능한 Classic Field부터 독특한 질감의 Stan Bitters에
              이르기까지 모든 타일은 캘리포니아에서 수작업으로 제작되며 <br />
              모든 타일은 어떤 표면에도 시대를 초월한 아름다움을 선사하도록
              설계되었습니다.
            </p> */}
            <div className="tilesz__inner">
              {TILESZ.map((ta) => {
                return (
                  <figure>
                    <img
                      src={process.env.PUBLIC_URL + '/assets/img/tilec0' + ta.id + '.jpg'}
                      alt=""
                    />

                    <div className="tiletxt">
                      <span className="tileicon">
                        <img src={process.env.PUBLIC_URL + '/assets/img/' + ta.icon}></img>
                      </span>
                      <h3>{ta.tit}</h3>
                      <p>{ta.des}</p>
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

export default Sub04
