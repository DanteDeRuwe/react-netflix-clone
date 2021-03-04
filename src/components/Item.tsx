import * as React from 'react';
import ListToggle from './ListToggle';

export interface ItemProps {
  backdrop: string;
  title: string;
  score: string;
  overview: string;
}

const Item: React.FC<ItemProps> = props => (
  <div className="Item" style={{ backgroundImage: 'url(' + props.backdrop + ')' }}>
    <div className="overlay">
      <div className="title">{props.title}</div>
      <div className="rating">{props.score} / 10</div>
      <div className="plot">{props.overview}</div>
      <ListToggle />
    </div>
  </div>
);

export default Item;
