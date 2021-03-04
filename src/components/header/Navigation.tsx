import * as React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => (
  <div id="navigation" className="Navigation">
    <nav>
      <ul>
        <li>
          <Link to="/browse">Browse</Link>
        </li>
        <li>
          <Link to="/top-picks">Top Picks</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        <li>
          <Link to="/watchlist">Watchlist</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
