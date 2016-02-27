# react-switch-path

Switch component to render React component like switch statement based on object path availability

## API

```js
import { Switch, Case, Default } from 'react-switch-path';

const obj = {
  propB: {
    propC: {
      id: 123
    }
  }
};

const app = (
  <Switch object={obj}>
    <Case path='propA' component={ComponentA}/>
    <Case path='propB' component={ComponentB}>
      <Case path='propC' component={ComponentC}/>
    </Case>
    <Default component={ComponentD}/>
  </Switch>
);

render(app, document.getElementById('app'));
```

Above will render `ComponentB` with `ComponentC` passed as `children` props of `ComponentB`. Also `ComponentC` will receive `{id: 123}` as it's props.
