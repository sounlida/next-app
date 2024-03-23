import { ProductField } from '@/app/lib/definitions';
// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type ProductsTableType = {
  id: number;
  title: string;
  color: string;
  price: number;
  image_url: string;
  size: string;
  category: string;
  condition: string;
  description: string;
  material: string;
};

export type FormattedProductsTable = {
  id: number;
  title: string;
  color: string;
  price: number;
  image_url: string;
  size: string;
  category: string;
  condition: string;
  description: string;
  material: string;
};
export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  details: string;
  images: string;
  colors: string;
  size: string;
  collection: string;
};

export type ProductItems = {
  id: number;
  title: string;
  price: number;
  images: string;
  colors: string;
};

export type ProductField = {
  id: number;
  title: string;
  price: number;
  images: string;
  colors: string;
};

export type ProductFieldRaw = Omit<Product, 'price'> & {
  price: number;
};
export type ProductItemsRaw = Omit<Product, 'price'> & {
  price: number;
};

export type ProductsTable = {
  id: number;
  title: string;
  color: string;
  price: number;
  image_url: string;
};

export type ProductForm = {
  id: number;
  title: string;
  color: string;
  price: number;
  image_url: string;
};
