/* Exercice 1 : 
Création de pages de base :

Créez deux pages de base, par exemple, Accueil et À propos, chacune avec son propre composant.
Configurez React Router pour afficher ces pages et permettez la navigation entre elles à l'aide de <Link>.
Page 404 :

Créez une page "Page non trouvée" qui s'affiche lorsque l'utilisateur accède à une URL inconnue.
Configurez React Router pour gérer les routes inexistantes en affichant cette page.
*/
/**
 * import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Accueil</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">À propos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
 */
/**
 * import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>À propos</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">À propos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default About;
 */
/**
 * import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
 */
/**
 * import React from 'react';

const NotFound = () => {
  return (
    <div>
      <h1>Page non trouvée</h1>
    </div>
  );
};

export default NotFound;

(App.js):<Route path="*" element={<NotFound />} />

 */
