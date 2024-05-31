import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbars from './components/Navbars';
import Ussection from './components/Ussection';
import Healthysection from './components/Healthysection';
import Trainerssection from './components/Trainerssection';
import Footer from './components/Footer';
import Contactsection from './components/Contactsection';
import Infosection from './components/Infosection';
import Products from './components/Products';

function App() {
  return (
    <div>
           <Navbars />
          <Ussection />
          <Healthysection />
          <Trainerssection />
          <Contactsection />
          <Infosection />
          <Footer /> 
          <Products />
    </div>
  );
}

export default App;
