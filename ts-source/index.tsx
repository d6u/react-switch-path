import * as React from 'react';
import { Component, ComponentClass, Children, ReactElement, createElement } from 'react';

const { toArray } = Children;

interface CaseProps {
  path: string;
  component: ComponentClass<any>;
  children: CaseElement[] | CaseElement;
}

class Case extends Component<CaseProps, void> {}

interface DefaultProps {
  component: ComponentClass<any>;
  children: CaseElement[] | CaseElement;
}

class Default extends Component<DefaultProps, void> {}

type CaseElement = ReactElement<CaseProps | DefaultProps>;

function renderChild(obj: Object, children: CaseElement[] | CaseElement): ReactElement<any> {
  let defaultComponent: ReactElement<DefaultProps>;

  for (const child of toArray(children) as CaseElement[]) {
    const { props: { component, children } } = child;

    if (child.type === Default) {
      defaultComponent = child;
    }

    const path = child.type === Case ? (child as ReactElement<CaseProps>).props.path : null;

    if (obj[path] != null) {
      return createElement(component, obj[path], renderChild(obj[path], children));
    }
  }

  if (defaultComponent) {
    const { props: { component, children } } = defaultComponent;
    return createElement(component, obj, renderChild(obj, children));
  }

  return null;
}

interface SwitchProps {
  object: Object;
  children: CaseElement[] | CaseElement;
}

class Switch extends Component<SwitchProps, void> {
  render() {
    const { object, children } = this.props;
    return renderChild(object, children);
  }
}

export {
  Switch,
  Case,
  Default,
};
