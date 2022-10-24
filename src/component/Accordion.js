import { useState } from 'react'
import React from 'react'

const Accordion = () => {
  const [selected, setSelected] = useState(null)
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null)
    }
    setSelected(i)
  }
  return (
    <section className="Accordion">
      <div className="inner">
        <div className="acrotxt">
          <span className="cali"> STEP INSIDE HEATH</span>
          <h2>우리 매장 위치</h2>
          <p>
            우리의 위치 캘리포니아 북부와 남부에 있는 4개 지역으로 구성된 저희
            가족은 다양하고 독특하며 각각 고유한 개성을 가지고 있습니다. 우리의
            이야기를 공유하고 상품을 전시하고, 제작자를 축하하고, 사람들을 모을
            수 있는 공간이 모두 히스입니다.
          </p>
        </div>

        <div className="arco">
          {datat.map((item, i) => (
            <div className="aritem">
              <div className="artitle" onClick={() => toggle(i)}>
                <div className="arname">
                  <span className="arimg">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '/assets/img/arimg' +
                        item.id +
                        '.png'
                      }
                      alt=""
                    />
                  </span>
                  <h3>{item.question}</h3>
                </div>
                <span className="arbtn">
                  <i className={selected === i ? 'xi-minus' : 'xi-plus'}></i>
                </span>
              </div>

              <div className={selected === i ? 'arcontent show' : 'arcontent'}>
                <ul>
                  <li>
                    <span>쇼룸 운영시간</span>
                    <p>{item.workhour}</p>
                  </li>
                  <li>
                    <span>재고 창고 운영시간</span>
                    <p>{item.shedhour}</p>
                  </li>
                  <li>
                    <span>쇼룸 주소</span>
                    <p>{item.address}</p>
                    <p>{item.phone}</p>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const datat = [
  {
    id: 1,
    question: '소살리토',
    workhour: '수요일-일요일 10am-5pm\n(커브 사이드 픽업 가능 시간: 12pm-4pm)',
    shedhour: '목요일~일요일 오전 10시~오후 4시',
    address: '400 Gate Five Road\nSausalito, CA 94965',
    phone: 'P: 415 - 332 - 3732',
  },
  {
    id: 2,
    question: '샌프란시스코',
    workhour: '화요일~토요일 10am~5pm\n(커브 사이드 픽업 가능 시간: 12pm-4pm)',
    shedhour: '목요일~일요일 오전 10시~오후 4시',
    address: '2900 18th Street\nSan Francisco, CA 94110',
    phone: 'P: 415 361 5552',
  },
  {
    id: 3,
    question: '로스 앤젤레스',
    workhour: '수요일-일요일 10am-5pm\n(커브 사이드 픽업 가능 시간: 12pm-4pm)',
    shedhour: '목요일~일요일 오전 10시~오후 4시',
    address:
      '7525 Beverly Boulevard\n(between Sierra Bonita & Gardner)\n Los Angeles, CA 90036',
    phone: 'P: 323 965 08002',
  },
  {
    id: 4,
    question: '페리빌딩',
    workhour: '수요일-일요일 10am-5pm\n(커브 사이드 픽업 가능 시간: 12pm-4pm)',
    shedhour: '목요일~일요일 오전 10시~오후 4시',
    address: 'One Ferry Building, Suite 12\nSan Francisco, CA 94111',
    phone: 'P: 415 399 9284',
  },
]

export default Accordion
