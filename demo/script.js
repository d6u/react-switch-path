import { Switch, Case } from '../ts-source/index.tsx';
import { render } from 'react-dom';

const A = () => {
  return <h1>Hello</h1>;
};

const obj = {
  propC: {}
};

const app = (
  <Switch object={obj}>
    <Case path='propA' component={A} />
  </Switch>
);

render(app, document.getElementById('app'));
