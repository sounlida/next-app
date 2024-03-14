export type Maybe<T> = T | null;

export type Connection<T> = {
  edges: Array<Edge<T>>;
};

export type Edge<T> = {
  node: T;
};

export type Cart = Omit<ShopCart, 'lines'> & {
  lines: CartItem[];
};

export type CartItem = {
  id: string;
  quantity: number;
  cost: {
    totalAmount: Money;
  };
  merchandise: {
    id: string;
    title: string;
    selectedOptions: {
      name: string;
      value: string;
    }[];
    product: Product;
  };
};

export type Collection = ShopCollection & {
  path: string;
};

export type Image = {
  url: string;
  altText: string;
  width: number;
  height: number;
};

export type Menu = {
  title: string;
  path: string;
};

export type Money = {
  amount: string;
  currencyCode: string;
};

export type Page = {
  id: string;
  title: string;
  handle: string;
  body: string;
  bodySummary: string;
  seo?: SEO;
  createdAt: string;
  updatedAt: string;
};

export type Product = Omit<ShopProduct, 'variants' | 'images'> & {
  variants: ProductVariant[];
  images: Image[];
};

export type ProductOption = {
  id: string;
  name: string;
  values: string[];
};

export type ProductVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  price: Money;
};

export type SEO = {
  title: string;
  description: string;
};

export type ShopCart = {
  id: string;
  checkoutUrl: string;
  cost: {
    subtotalAmount: Money;
    totalAmount: Money;
    totalTaxAmount: Money;
  };
  lines: Connection<CartItem>;
  totalQuantity: number;
};

export type ShopCollection = {
  handle: string;
  title: string;
  description: string;
  seo: SEO;
  updatedAt: string;
};

export type ShopProduct = {
  id: string;
  handle: string;
  availableForSale: boolean;
  title: string;
  description: string;
  descriptionHtml: string;
  options: ProductOption[];
  priceRange: {
    maxVariantPrice: Money;
    minVariantPrice: Money;
  };
  variants: Connection<ProductVariant>;
  featuredImage: Image;
  images: Connection<Image>;
  seo: SEO;
  tags: string[];
  updatedAt: string;
};

export type ShopCartOperation = {
  data: {
    cart: ShopCart;
  };
  variables: {
    cartId: string;
  };
};

export type ShopCreateCartOperation = {
  data: { cartCreate: { cart: ShopCart } };
};

export type ShopAddToCartOperation = {
  data: {
    cartLinesAdd: {
      cart: ShopCart;
    };
  };
  variables: {
    cartId: string;
    lines: {
      merchandiseId: string;
      quantity: number;
    }[];
  };
};

export type ShopRemoveFromCartOperation = {
  data: {
    cartLinesRemove: {
      cart: ShopCart;
    };
  };
  variables: {
    cartId: string;
    lineIds: string[];
  };
};

export type ShopUpdateCartOperation = {
  data: {
    cartLinesUpdate: {
      cart: ShopCart;
    };
  };
  variables: {
    cartId: string;
    lines: {
      id: string;
      merchandiseId: string;
      quantity: number;
    }[];
  };
};

export type ShopCollectionOperation = {
  data: {
    collection: ShopCollection;
  };
  variables: {
    handle: string;
  };
};

export type ShopCollectionProductsOperation = {
  data: {
    collection: {
      products: Connection<ShopProduct>;
    };
  };
  variables: {
    handle: string;
    reverse?: boolean;
    sortKey?: string;
  };
};

export type ShopCollectionsOperation = {
  data: {
    collections: Connection<ShopCollection>;
  };
};

export type ShopMenuOperation = {
  data: {
    menu?: {
      items: {
        title: string;
        url: string;
      }[];
    };
  };
  variables: {
    handle: string;
  };
};

export type ShopPageOperation = {
  data: { pageByHandle: Page };
  variables: { handle: string };
};

export type ShopPagesOperation = {
  data: {
    pages: Connection<Page>;
  };
};

export type ShopProductOperation = {
  data: { product: ShopProduct };
  variables: {
    handle: string;
  };
};

export type ShopProductRecommendationsOperation = {
  data: {
    productRecommendations: ShopProduct[];
  };
  variables: {
    productId: string;
  };
};

export type ShopProductsOperation = {
  data: {
    products: Connection<ShopProduct>;
  };
  variables: {
    query?: string;
    reverse?: boolean;
    sortKey?: string;
  };
};
