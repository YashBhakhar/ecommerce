# E-Commerce REST API

A comprehensive RESTful API for e-commerce applications based on the features of [Molimor Store](https://store.molimor.co/). This API provides endpoints for user authentication, product management, cart operations, order processing, and wishlist functionality.

## Features

- **User Authentication**
  - Register with email and password
  - JWT-based authentication
  - Role-based authorization (User/Admin)

- **Product Management**
  - Browse products with search, filter, and pagination
  - Admin-only product CRUD operations

- **Shopping Cart**
  - Add products to cart
  - Update product quantities
  - Remove products from cart

- **Order Processing**
  - Place orders with shipping details
  - View order history and status
  - Order details

- **Wishlist**
  - Add products to wishlist
  - View wishlist items
  - Remove products from wishlist

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT, bcrypt
- **Validation**: express-validator
- **Environment Variables**: dotenv

## Setup Instructions

### Prerequisites

- Node.js (v14+)
- MongoDB (local instance or MongoDB Atlas)
- Git

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/YashBhakhar/ecommerce-api.git
   cd ecommerce-api
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/ecommerce
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRE=30d
   ```

4. Start the development server
   ```bash
   npm start
   ```


### Database Setup

The application will automatically create the necessary collections in MongoDB when it first connects. Make sure your MongoDB instance is running before starting the application.

## Testing with Postman

A complete Postman collection for testing all API endpoints is included in this repository. To use it:

1. Import the `E-Commerce API.postman_collection.json` file into Postman
2. Create an environment with the following variables:
   - `BASE_URL`: Your API base URL (e.g., `http://localhost:5000/api`)
   - `TOKEN`: Will be automatically populated after login
   - `ADMIN_TOKEN`: Admin user token (set manually after creating an admin)

## Error Handling

The API uses standardized error responses:

```json
{
  "error": "Error message here"
}
```

For validation errors:

```json
{
  "errors": [
    {
      "msg": "Field is required",
      "param": "fieldName",
      "location": "body"
    }
  ]
}
```