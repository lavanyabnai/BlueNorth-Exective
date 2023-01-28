import * as React from 'react';
const Utilization = props => {
  const text = <div id="Favourites" className="page favourites-page">
    Utilization;
        <ul>

          <li>70% Discount!</li>
          <li>90% Discount!</li>
          <li>One time offer!</li>
        </ul>
      </div>;
  return <div>
        {props.children ? props.children : text}
      </div>;
};
export default Utilization;