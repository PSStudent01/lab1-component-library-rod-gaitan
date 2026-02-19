README file for Lab 9.1



\# 

Component Library



A reusable React component library built with TypeScript and Tailwind CSS.



\## 

Setup



\###

Clone and install

npm install



\###

Run development server

npm run dev



\*Note: 

\- This project uses Tailwind CSS v3. If you encounter setup issues, be sure you have:

-- 'tailwindcss@^3' installed

-- '@tailwind' code line in 'src/index.css'

-- Proper 'tailwind.config.js' configuration



\*Note:

\- WARNING: ""Unknown at rule @tailwind"..."

\- VS Code's appears to be complaining about Tailwind:

@tailwind base;

@tailwind components;

@tailwind utilities;

.. but it's not causing any issues, so I decided to just leave it as is



\##

Documentation:

\- Example usage documentation, provided within the code itself



\## 

Components:



\### 

AlertBox:

\- Displays styled alert messages.



<AlertBox type="success" message="Profile saved!" />



<AlertBox

&nbsp; type="error"

&nbsp; message="Something went 	wrong!"

&nbsp; onClose={() => setShowAlert(false)}

/>



<AlertBox type="warning" message="Be careful!">

&nbsp; <p>Additional details here.</p>

</AlertBox>





Types: `success` | `error` | `warning` | `info`



\### 

UserProfileCard:

\- Displays a user's profile information.



const user = {

&nbsp; id: '1',

&nbsp; name: 'John Doe',

&nbsp; email: 'john.doe@example.com',

&nbsp; role: 'Software Engineer'

};



<UserProfileCard user={user} />



\### 

ProductDisplay

\- Displays product information.



const product = {

&nbsp; id: '1',

&nbsp; name: 'Wireless Headphones',

&nbsp; price: 199.99,

&nbsp; description: 'High-quality wireless headphones.',

&nbsp; imageUrl: 'https://example.com/image.jpg',

&nbsp; inStock: true

};



<ProductDisplay product={product} />





\## 

Resources Used:

\- Per Scholas Lab 1 instructions

\- React Official Documentation: https://react.dev/

\- Vite Official Documentation: https://vitejs.dev/ 

\- React for Beginners  (React Docs Tutorial): https://react.dev/learn

\- Learn React With This ONE Project: https://www.youtube.com/watch?v=G6D9cBaLViA

\- used only concepts covered up to Lesson 3 bc conditional rendering had not been taught yet

