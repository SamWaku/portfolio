import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js';
import Footer from './components/footer';

function App() {
  return (
    <>
    <Particles
    className="particles-canvas"
      params={{
        Particles: {
          number: {
              value: 10,
              density: {
                enable: true,
                value_area: 500
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 4,
              color: "#f9ab00"
            }
          }
        }
      }}
    />
    <Navbar />
    <Header />
    <Footer />
    </>
  );
}

export default App;
