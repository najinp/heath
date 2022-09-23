import React from 'react'
import IconA from './svg/IconA'

const Subscribe = () => {
    return (
        <section className='Subscribe'>
            <div className="inner">
                <img className='sub_back' src="assets/img/subscribe.jpg" alt="" />
                <div className="ipb">
                    <span className='cali'> IN CALIFORNIA SINCE 1948</span>
                    <input placeholder='성함을 입력하세요'></input>
                    <IconA />
                    <span className='account'>
                        <a href="">나의 계정 관리하기</a>
                    </span>
                </div>
            </div>

        </section>
    )
}

export default Subscribe