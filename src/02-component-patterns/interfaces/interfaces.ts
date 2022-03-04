import { Props as ProductButtonsProps} from '../components/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductImageProps} from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';

export interface Product {
  id: string
  title: string
  img?: string
}

export interface IProductContext {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product,
  maxCount?: number
}

export interface IProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props : ProductButtonsProps) => JSX.Element;
}

export interface onChangeArgs {
  product: Product,
  counter: number;
}

export interface IProductInCart extends Product {
  counter: number
}

export interface IInitialValues {
  count?: number;
  maxCount?: number;
}


export interface IProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product

  increaseBy: (value: number) => void;
  reset: () => void;

}