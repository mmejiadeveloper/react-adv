import { lazy, LazyExoticComponent } from "react";
import { NoLazyLayout } from '../01-lazyload/pages/NoLazyLayout';

type JSXComponent = () => JSX.Element

interface Router {
  to: string,
  path: string,
  Component: LazyExoticComponent<JSXComponent> | JSXComponent,
  name: string,
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'))

export const routes: Array<Router> = [
  {
    path: '/lazyload/*',
    to: '/lazyload/',
    Component: LazyLayout,
    name: 'LazyLayout - Dash'
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazyLayout,
    name: 'NoLazy'
  }
]