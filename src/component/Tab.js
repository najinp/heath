import { useState } from 'react'

function Tab() {
  const [toggle, setToggle] = useState(1)

  const toggleTabs = (index) => {
    setToggle(index)
  }

  return (
    <section class="Tab">
      <div className="inner">
        <span className="cali">IN CALIFORNIA SINCE 1948</span>
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
        </div>

        <ul className="tab_card">
          <li className={toggle === 1 ? 'active-content01' : 'none'}>
            <div className="card_left">
              <img src="heath/assets/img/tab_itm07.jpg" alt="product" />
            </div>
            <div className="card_right">
              <span className="cal">ACCESSORIES</span>
              <h4>해바라기 꽃병</h4>
              <span className="price">35,000원</span>
            </div>
          </li>
          <li className={toggle === 2 ? 'active-content02' : 'none'}>
            <div className="card_left">
              <img src="heath/assets/img/tab_itm08.jpg" alt="product" />
            </div>
            <div className="card_right">
              <span className="cal">GLASSWARE</span>
              <h4>에메랄드 텀블러</h4>
              <span>48,000원</span>
            </div>
          </li>
          <li className={toggle === 3 ? 'active-content03' : 'none'}>
            <div className="card_left">
              <img src="heath/assets/img/tab_itm09.jpg" alt="product" />
            </div>
            <div className="card_right">
              <span className="cal">FURNITURE</span>
              <h4>골드 폴딩 트레이 테이블</h4>
              <span>475,000원</span>
            </div>
          </li>
          <li className={toggle === 4 ? 'active-content04' : 'none'}>
            <div className="card_left">
              <img src="heath/assets/img/tab_itm10.jpg" alt="product" />
            </div>
            <div className="card_right">
              <span className="cal">GLASSWARE</span>
              <h4>칵테일 믹서와 에메랄드 스틱</h4>
              <span>88,000원</span>
            </div>
          </li>
          <li className={toggle === 5 ? 'active-content05' : 'none'}>
            <div className="card_left">
              <img src="heath/assets/img/tab_itm11.jpg" alt="product" />
            </div>
            <div className="card_right">
              <span className="cal">LINENS</span>
              <h4>타이거 칵테일 냅킨</h4>
              <span>16,000원</span>
            </div>
          </li>
          <li className={toggle === 6 ? 'active-content06' : 'none'}>
            <div className="card_left">
              <img src="heath/assets/img/tab_itm12.jpg" alt="product" />
            </div>
            <div className="card_right">
              <span className="cal">PILLOWS</span>
              <h4>임나왈</h4>
              <span>680,000원</span>
            </div>
          </li>
        </ul>
        <img class="back" src="heath/assets/img/tabimg01.jpg" alt="" />
      </div>
    </section>
  )
}

export default Tab
