import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './style/index.css';

function App() {
  let pageTitle = 'Intro to React';
  let bannerTitle = 'Locating code';
  let bannerText = `Welcome to this page, using this page you can alter the looks of the page 
                    using the two buttons found below, between light and dark styles.
                    We have not found the code yet. :(`
  let styleType;
  let footerText = 'Copyright Mako 2023';

  const navigation = [ "Home", "About", "Login" ];

  const images = [ 
    "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?cs=srgb&dl=pexels-markus-spiske-1089438.jpg&fm=jpg", 
    "https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg", 
    "https://pilbox.themuse.com/image.jpg?filter=antialias&h=385&opt=1&pos=top-left&prog=1&q=keep&url=https%3A%2F%2Fcms-assets.themuse.com%2Fmedia%2Flead%2F01212022-1047259374-coding-classes_scanrail.jpg&w=700", 
    "https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" ];


  return (
    <>
      <Header
        title={pageTitle}
        navigation={navigation}
      />
      <main>
        <Banner
          bannerTitle={bannerTitle}
          text={bannerText}
          styleType={styleType}
        />
        <Gallery
          images={images}
        />
        <Footer
          footerText={footerText}
        />
      </main>
    </>
  );
}

export default App;
