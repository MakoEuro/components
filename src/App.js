import Header from './components/Header';
import Banner from './components/Banner';
import './style/index.css';

function App() {
  let pageTitle = 'Intro to React';
  let bannerTitle = 'Locating code';
  let bannerText = 'Welcome to this page, using this page you can alter the looks of the page \n'
                + 'using the two buttons found below, between light and dark styles. \n'
                + 'We have not found the code yet. :(';
  let isStyleOne = true;

  return (
    <>
      <Header
        title={pageTitle}
      />
      <main>
        <Banner 
          bannerTitle={bannerTitle}
          text={bannerText}
          isStyleOne={isStyleOne}
        />
      </main>
    </>
  );
}

export default App;
