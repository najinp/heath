import './App.css';
import Header from './component/Header';
import Wrapper from './component/Wrapper';
import MainVisual from './component/MainVisual';
import Footer from './component/Footer';
import Tabs from './component/Tabs';
import Tabb from './component/Tabb';

const App = () => {
  return (
    <Wrapper>
      <Header />
      <main>
        <MainVisual />
        <Tabs />
        <Tabb />
      </main>
      <Footer />
    </Wrapper >
  );
}


export default App;
