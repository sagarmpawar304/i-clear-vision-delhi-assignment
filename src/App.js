import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from './components/Loader';
import Navbar from './components/Navbar';

const Home = lazy(() => import('./pages/Home'));
const Movie = lazy(() => import('./pages/Movie'));
const Favorites = lazy(() => import('./pages/Favorites'))

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path='/favorites' component={Favorites} />
          <Route path='/movie' component={Movie} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
