import * as React from 'react';
import { Component, Children, ReactElement, createElement } from 'react';

const { toArray } = Children;

interface SwitchProps {
  object: any;
  children: Case[] | Case;
}

class Switch extends Component<SwitchProps, void> {
  render() {
    const { object, children } = this.props;

    for (const { props: { path, component } } of toArray(children) as ReactElement<any>[]) {
      if (object[path] != null) {
        return createElement(component, object[path]);
      }
    }

    return null;
  }
}

interface CaseProps {
  path: string;
  component: React.Component<any, any>;
}

class Case extends Component<CaseProps, void> {

}

// <Switch object={obj}>
//   <Case path='propA' component={A}/>
//   <Case path='propB' component={B}/>
//   <Case path='propC' component={C}>
//     <Case path='child' component={D}/>
//   </Case>
//   <Default component={Default}/>
// </Switch>

export {
  Switch,
  Case,
};
