
//Inserting all the TypeScript interfaces and types that our components will use.
//Copied from the Lab requirements


// Define the visual style and type of the 'AlertBox' component.
// each aler type equates to a color:
// success = green
// error = red
// warning = yellow
// info = blue
export type AlertType = 'success' | 'error' | 'warning' | 'info';
 
// these are teh props for the 'AlertBox':
// 'type' defines the color/style of the alert
// 'message' defines the text to display in the alert message
// 'onClose' shows a 'x' button
// 'children' for more content  below the profile info
export interface AlertBoxProps {
  type: AlertType;
  message: string;
  onClose?: () => void;
  children?: React.ReactNode;
}


// This defines the shape of the 'User' object
// id: uniquely identifies user
// name: user's name
// email: user's email address
// role: user's job role
// avatarUrl?: url for user's profile image
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}
 
// props for the 'UserProfileCard' component
// user: user object to be displayed
// showEmail?: determines whether or the emial is visible
// showRole?: determines whether or the job role is visible
// onEdit?: (userId: string) => void;children?: React.ReactNode;
// children?: for more content  below the profile info
export interface UserProfileCardProps {
  user: User;
  showEmail?: boolean;
  showRole?: boolean;
  onEdit?: (userId: string) => void;
  children?: React.ReactNode;
}


// This defines the shape of a 'Product' object
// id: uniquely identifies product
// name: product's name
// price: product's price
// description: product's description
// imageUrl?: whether or not product is in stock
// inStock: url for product's image
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  inStock: boolean;
}
 

// Props for the 'ProductDisplay' component
// product: product object to be displayed
// showDescription?: determines whether or the description  is visible
// showStockStatus?: determines whether or the stock status is visible
// onAddToCart?: if true, it shows 'Add' next to Cart button
// children?: for more content  below the profile info
export interface ProductDisplayProps {
  product: Product;
  showDescription?: boolean;
  showStockStatus?: boolean;
  onAddToCart?: (productId: string) => void;
  children?: React.ReactNode;
}