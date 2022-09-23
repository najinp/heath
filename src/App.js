import './App.css';
import Header from './component/Header';
import Wrapper from './component/Wrapper';
import MainVisual from './component/MainVisual';
import Footer from './component/Footer';
import Tab from './component/Tab';
import Category from './component/Category';
import Subscribe from './component/Subscribe';


const App = () => {
  return (
    <Wrapper>
      <Header />
      <main>
        <MainVisual />
        <Category />
        <Tab />
        <Subscribe />
      </main>
      <Footer />
    </Wrapper >
  );
}


export default App;
