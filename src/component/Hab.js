import { useState } from 'react'

const COUPE = [
  {
    id: '1',
    tit: '디너 플레이트',
    sort: 'Coupe Line',
    color: '9 Colors / 44,000원',
  },
  {
    id: '2',
    tit: '샐러드 플레이트',
    sort: 'Coupe Line',
    color: '9 Colors / 36,000원',
  },
  {
    id: '3',
    tit: '쿠페 빵 & 버터 플레이트',
    sort: 'Coupe Line',
    color: '9 Colors / 23,000원',
  },
  {
    id: '4',
    tit: '시리얼 그릇',
    sort: 'Coupe Line',
    color: '13Colors / 37,000원',
  },
  {
    id: '5',
    tit: '디저트그릇',
    sort: 'Coupe Line',
    color: '9 Colors / 32,000원',
  },
  {
    id: '6',
    tit: '얇은 샐러드 그릇',
    sort: 'Coupe Line',
    color: '9 Colors / 44,000원',
  },
]
const SHED = [
  {
    id: '1',
    tit: '메인 플레이트',
    color: '9 Colors / 44,000원',
  },
  {
    id: '2',
    tit: '샐러드 플레이트',
    color: '9 Colors / 36,000원',
  },
  {
    id: '3',
    tit: '쿠페 빵 & 버터 플레이트',
    color: '9 Colors / 23,000원',
  },
  {
    id: '4',
    tit: '시리얼 그릇',
    color: '13Colors / 37,000원',
  },
  {
    id: '5',
    tit: '디저트그릇',
    color: '9 Colors / 32,000원',
  },
  {
    id: '6',
    tit: '얇은 샐러드 그릇',
    color: '9 Colors / 44,000원',
  },
]

function Habs() {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <section className="Habs">
      <span>A FEW FAVORITES</span>
      <h2>Good goods worth seeing</h2>
      <div className="habs__container">
        <div className="bloc-habs">
          <button
            className={toggleState === 1 ? 'habs active-habs' : 'habs'}
            onClick={() => toggleTab(1)}
          >
            Coupe
          </button>
          <button
            className={toggleState === 2 ? 'habs active-habs' : 'habs'}
            onClick={() => toggleTab(2)}
          >
            Chez Panisse
          </button>
          <button
            className={toggleState === 3 ? 'habs active-habs' : 'habs'}
            onClick={() => toggleTab(3)}
          >
            Rim
          </button>
          <button
            className={toggleState === 4 ? 'habs active-habs' : 'habs'}
            onClick={() => toggleTab(4)}
          >
            Alabama Chanin
          </button>
        </div>

        <div className="content-habs">
          <div
            className={
              toggleState === 1 ? 'habcontent  active-habcontent' : 'habcontent'
            }
          >
            <div className="habs_contents">
              {COUPE.map((it) => {
                return (
                  <figure>
                    <img src={process.env.PUBLIC_URL + '/assets/img/coupe0' + it.id + '.jpg'}></img>
                    <span className="tit">{it.tit}</span>
                    <span className="sort">{it.sort}</span>
                    <span className="col">{it.color}</span>
                  </figure>
                )
              })}
            </div>
          </div>

          <div
            className={
              toggleState === 2 ? 'habcontent  active-habcontent' : 'habcontent'
            }
          >
            <div className="habs_contents">
              {SHED.map((it) => {
                return (
                  <figure>
                    <img src={process.env.PUBLIC_URL + '/assets/img/chez0' + it.id + '.jpg'}></img>
                    <span className="tit">{it.tit}</span>
                    <span className="sort">Chez Line</span>
                    <span className="col">{it.color}</span>
                  </figure>
                )
              })}
            </div>
          </div>

          <div
            className={
              toggleState === 3 ? 'habcontent  active-habcontent' : 'habcontent'
            }
          >
            <div className="habs_contents">
              {SHED.map((it) => {
                return (
                  <figure>
                    <img src={process.env.PUBLIC_URL + '/assets/img/rim0' + it.id + '.jpg'}></img>
                    <span className="tit">{it.tit}</span>
                    <span className="sort">Rim Line</span>
                    <span className="col">{it.color}</span>
                  </figure>
                )
              })}
            </div>
          </div>
          <div
            className={
              toggleState === 4 ? 'habcontent  active-habcontent' : 'habcontent'
            }
          >
            <div className="habs_contents">
              {SHED.map((it) => {
                return (
                  <figure>
                    <img
                      src={process.env.PUBLIC_URL + '/assets/img/alabama0' + it.id + '.jpg'}
                    ></img>
                    <span className="tit">{it.tit}</span>
                    <span className="sort">Alabama Line</span>
                    <span className="col">{it.color}</span>
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

export default Habs
