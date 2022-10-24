import './App.css'
import './Sub.css'
import Header from './component/Header'
import Wrapper from './component/Wrapper'
import Footer from './component/Footer'
import Main from './component/Main'
import Sub01 from './component/Sub01'
import Sub02 from './component/Sub02'
import Sub03 from './component/Sub03'
import Sub04 from './component/Sub04'
import Sub05 from './component/Sub05'
import Sub06 from './component/Sub06'

import { Route, Routes } from 'react-router-dom'

import Sicki from './component/Sicki'
import Jangsik from './component/Jangsik'
import Taksang from './component/Taksang'
import Tile from './component/Tile'
import Gift from './component/Gift'
import Us from './component/Us'

const App = () => {
  const wow = [
    {
      id: 0,
      name: '식기류',
      tit: '이야기를 전하고 당신의 일부가 되는 도자기',
      des:
        '1948년부터 Heath 제품은 캘리포니아 소살리토에서 수작업으로 만들어졌습니다. 우리는 지속 가능성, 무결성 및 아름다움을 최우선으로 모든 식기를 디자인합니다.각 Heath 라인은 고유하지만 모두 함께 작동하므로 시간이 지남에 따라 자신만의 홈 컬렉션을 계속 구축할 수 있습니다.',
      link: '/sub01',
      multimenu: <Sicki />,
    },
    {
      id: 1,
      name: '탁상 및 주방',
      tit: '좋은 회사에서 요리하고 식사 하기',
      des:
        '요리와 식사를 위한 아름답고 간단한 도구: 썰기 위한 칼, 눕히기 위한 린넨, 식사용 기구, 토스트용 잔. 우리가 먹고, 살고, 연결하는 방식을 고려하여 제품을 만들었습니다. 테이블 위, 식기 옆, 오븐 내부, 선반 채우기 등 모든 것이 수집되고 테스트되었습니다. 즐기다!',
      link: '/sub02',
      multimenu: <Taksang />,
    },
    {
      id: 2,
      name: '장식 및 가구',
      tit: '이야기를 전하고 당신의 일부가 되는 도자기',
      des:
        '1948년부터 Heath 제품은 캘리포니아 소살리토에서 수작업으로 만들어졌습니다. 우리는 지속 가능성, 무결성 및 아름다움을 최우선으로 모든 식기를 디자인합니다.각 Heath 라인은 고유하지만 모두 함께 작동하므로 시간이 지남에 따라 자신만의 홈 컬렉션을 계속 구축할 수 있습니다.',
      link: '/sub03',
      multimenu: <Jangsik />,
    },
    {
      id: 3,
      name: '타일',
      tit: '좋은 회사에서 요리하고 식사 하기',
      des:
        '요리와 식사를 위한 아름답고 간단한 도구: 썰기 위한 칼, 눕히기 위한 린넨, 식사용 기구, 토스트용 잔. 우리가 먹고, 살고, 연결하는 방식을 고려하여 제품을 만들었습니다. 테이블 위, 식기 옆, 오븐 내부, 선반 채우기 등 모든 것이 수집되고 테스트되었습니다. 즐기다!',
      link: '/sub04',
      multimenu: <Tile />,
    },
    {
      id: 4,
      name: '선물',
      tit: '이야기를 전하고 당신의 일부가 되는 도자기',
      des:
        '1948년부터 Heath 제품은 캘리포니아 소살리토에서 수작업으로 만들어졌습니다. 우리는 지속 가능성, 무결성 및 아름다움을 최우선으로 모든 식기를 디자인합니다.각 Heath 라인은 고유하지만 모두 함께 작동하므로 시간이 지남에 따라 자신만의 홈 컬렉션을 계속 구축할 수 있습니다.',
      link: '/sub05',
      multimenu: <Gift />,
    },
    {
      id: 5,
      name: '우리',
      tit: '이야기를 전하고 당신의 일부가 되는 도자기',
      des:
        '1948년부터 Heath 제품은 캘리포니아 소살리토에서 수작업으로 만들어졌습니다. 우리는 지속 가능성, 무결성 및 아름다움을 최우선으로 모든 식기를 디자인합니다.각 Heath 라인은 고유하지만 모두 함께 작동하므로 시간이 지남에 따라 자신만의 홈 컬렉션을 계속 구축할 수 있습니다.',
      link: '/sub06',
      multimenu: <Us />,
    },
  ]

  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sub01" element={<Sub01 content={wow} />} />
        <Route path="/sub02" element={<Sub02 content={wow} />} />
        <Route path="/sub03" element={<Sub03 content={wow} />} />
        <Route path="/sub04" element={<Sub04 content={wow} />} />
        <Route path="/sub05" element={<Sub05 content={wow} />} />
        <Route path="/sub06" element={<Sub06 content={wow} />} />
      </Routes>
      <Footer />
    </Wrapper>
  )
}

export default App
