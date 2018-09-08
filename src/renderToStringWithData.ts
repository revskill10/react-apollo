import { ReactElement } from 'react';
import ReactDOM from 'react-dom/server';

import { default as getDataFromTree } from './getDataFromTree';

export function renderToStringWithData(component: ReactElement<any>): Promise<string> {
  return getDataFromTree(component).then(() => ReactDOM.renderToString(component));
}

export function renderToStreamWithData(component) {
  return getDataFromTree(component).then(() => ReactDOM.renderToNodeStream(component));
};
