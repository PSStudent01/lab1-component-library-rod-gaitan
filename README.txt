README file for Lab 9.1

# 
Component Library

A reusable React component library built with TypeScript and Tailwind CSS.

## 
Setup

###
Clone and install
npm install

###
Run development server
npm run dev

*Note: 
- This project uses Tailwind CSS v3. If you encounter setup issues, be sure you have:
-- 'tailwindcss@^3' installed
-- '@tailwind' code line in 'src/index.css'
-- Proper 'tailwind.config.js' configuration

*Note:
- WARNING: ""Unknown at rule @tailwind"..."
- VS Code's appears to be complaining about Tailwind:
@tailwind base;
@tailwind components;
@tailwind utilities;
.. but it's not causing any issues, so I decided to just leave it as is

##
Documentation:
- Example usage documentation, provided within the code itself

## 
Components:

### 
AlertBox:
- Displays styled alert messages.

<AlertBox type="success" message="Profile saved!" />

<AlertBox
  type="error"
  message="Something went 	wrong!"
  onClose={() => setShowAlert(false)}
/>

<AlertBox type="warning" message="Be careful!">
  <p>Additional details here.</p>
</AlertBox>


Types: `success` | `error` | `warning` | `info`

### 
UserProfileCard:
- Displays a user's profile information.

const user = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'Software Engineer'
};

<UserProfileCard user={user} />

### 
ProductDisplay
- Displays product information.

const product = {
  id: '1',
  name: 'Wireless Headphones',
  price: 199.99,
  description: 'High-quality wireless headphones.',
  imageUrl: 'https://example.com/image.jpg',
  inStock: true
};

<ProductDisplay product={product} />


## 
Resources Used:
- Per Scholas Lab 1 instructions
- React Official Documentation: https://react.dev/
- Vite Official Documentation: https://vitejs.dev/ 
- React for Beginners  (React Docs Tutorial): https://react.dev/learn
- Learn React With This ONE Project: https://www.youtube.com/watch?v=G6D9cBaLViA
- used only concepts covered up to Lesson 3 bc conditional rendering had not been taught yet