import * as React from 'react';

export interface HeroButtonProps {
  primary: boolean;
  text: string;
}

const HeroButton: React.FC<HeroButtonProps> = props => (
  <a href="#" className="Button" data-primary={props.primary}>
    {props.text}
  </a>
);

export default HeroButton;
