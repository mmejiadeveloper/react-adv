import { ReactElement } from 'react';

export interface ProductCardProps {
  product: Product
  children?: ReactElement[]
}

export interface Product {
  id: string
  title: string
  img?: string
}

export interface IProductContext {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product
}

export interface IProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
}