import * as React from 'react';
import './App.css';
import Logo from './components/header/Logo';
import Navigation from './components/header/Navigation';
import Search from './components/header/Search';
import UserProfile from './components/header/UserProfile';
import Browse from './components/Browse';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export interface AppState {
  searchUrl: string;
}

export class App extends React.Component<{}, AppState> {
  constructor(props) {
    super(props);
    this.state = { searchUrl: '' };
  }

  apiKey: string = '87dfa1c669eea853da609d4968d294be';

  render() {
    return (
      <Router>
        <header className="Header">
          <Logo />
          <Navigation />
          <Search onSearchChange={url => this.setState({ searchUrl: url })} />
          <UserProfile />
        </header>
        <Route path={['/', 'home', 'browse']} component={Browse} />
      </Router>
    );
  }
}

export default App;
