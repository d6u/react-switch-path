import { Switch, Case, Default } from '../ts-source/index.tsx';
import { render } from 'react-dom';

const A = () => {
  return <h1>A</h1>;
};

const B = () => {
  return <h1>B</h1>;
};

const C = ({ children }) => {
  return (
    <div>
      <h1>C</h1>
      {children}
    </div>
   );
};

const D = () => {
  return <h1>D</h1>;
};

const obj = {
  propC: {
    propChild: {}
  }
};

const app = (
  <Switch object={obj}>
    <Case path='propA' component={A} />
    <Case path='propB' component={B} />
    <Default component={C}>
      <Case path='propC' component={D} />
      <Default component={A} />
    </Default>
  </Switch>
);

render(app, document.getElementById('app'));
