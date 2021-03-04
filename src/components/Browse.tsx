import React from 'react';
import Hero from './Hero';
import TitleList from './TitleList';

export interface BrowseProps {
  searchUrl: string;
}

const Browse: React.FC<BrowseProps> = props => (
  <div>
    <Hero />
    <TitleList title="Top TV picks for Jack" url="discover/tv?sort_by=popularity.desc&page=1" />
    <TitleList title="Trending now" url="discover/movie?sort_by=popularity.desc&page=1" />
    <TitleList title="Most watched in Horror" url="genre/27/movies?sort_by=popularity.desc&page=1" />
    <TitleList title="Sci-Fi greats" url="genre/878/movies?sort_by=popularity.desc&page=1" />
    <TitleList title="Comedy magic" url="genre/35/movies?sort_by=popularity.desc&page=1" />
  </div>
);

export default Browse;
