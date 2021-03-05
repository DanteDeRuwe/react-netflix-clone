import * as React from 'react';
import './App.css';
import Logo from './components/header/Logo';
import Navigation from './components/header/Navigation';
import Search from './components/header/Search';
import UserProfile from './components/header/UserProfile';
import Browse from './components/Browse';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchResults from './components/SearchResults';

const apiKey = '87dfa1c669eea853da609d4968d294be';

const App: React.FC = () => {
  const [searchUrl, setSearchUrl] = React.useState('');

  return (
    <Router>
      <header className="Header">
        <Logo />
        <Navigation />
        <Search onSearchChange={setSearchUrl} />
        <UserProfile />
      </header>
      <SearchResults searchUrl={searchUrl}></SearchResults>
      <Route path={['/', '/home', '/browse']} exact component={Browse} />
    </Router>
  );
};

export default App;
