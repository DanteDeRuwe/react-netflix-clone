import * as React from 'react';

const ListToggle: React.FC = () => {
  const [toggled, setToggled] = React.useState(false);

  const toggle = React.useCallback(() => setToggled(!toggled), []);

  return (
    <div onClick={toggle} data-toggled={toggled} className="ListToggle">
      <div>
        <i className="fa fa-fw fa-plus"></i>
        <i className="fa fa-fw fa-check"></i>
      </div>
    </div>
  );
};

export default ListToggle;
