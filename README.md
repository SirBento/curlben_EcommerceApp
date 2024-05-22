## Curlben Ecommerce App

This repository contains the code for a full-stack e-commerce application built with ReactJS for the frontend, ExpressJS for the backend, MongoDB for the database, and NodeJS as the runtime environment.

### Prerequisites

* NodeJS (version 14 or higher)
* npm (Node Package Manager)
* MongoDB (version 4.0 or higher)

### Installation and Setup

1. Clone the repository:

```
git clone https://github.com/SirBento/Curlben_EcommerceApp.git
```

2. Navigate to the project directory:

```
cd Curlben_EcommerceApp
```

3. Install dependencies for both frontend and backend:

* **Frontend:**

```
cd frontend
npm install
```

* **Backend:**

```
cd backend
npm install
```

4. Start the MongoDB server:

```
mongod
```

5. Start the backend server:

```
cd backend
npm start
```

6. Start the frontend server:

```
cd frontend
npm start
```

### Usage

Once the servers are running, you can access the application at http://localhost:3000 in your browser.

### Features

The application includes the following features:

* User authentication and registration
* Product browsing and filtering
* Shopping cart and checkout
* Order tracking
* Payment processing (integration with a payment gateway)
* Admin panel for managing products, orders, and users

### Contributing

Contributions are welcome! Please read the CONTRIBUTING.md file for details on how to contribute to the project.

### License

This project is licensed under the MIT License - see the LICENSE.md file for details.

### Additional Notes

* The backend server uses the following environment variables:
    * `PORT`: The port on which the server should listen (default: 5000)
    * `MONGO_URI`: The connection string for the MongoDB database
* The frontend server uses the following environment variables:
    * `REACT_APP_API_URL`: The URL of the backend API (default: http://localhost:5000)
* The application uses the following third-party libraries:
    * React
    * Redux
    * React Router
    * Axios
    * Mongoose
    * Express
    * Stripe (for payment processing)

### Screenshots

* [Frontend homepage](https://i.imgur.com/your-image-url.png)
* [Product details page](https://i.imgur.com/your-image-url.png)
* [Shopping cart page](https://i.imgur.com/your-image-url.png)
* [Checkout page](https://i.imgur.com/your-image-url.png)
* [Admin panel](https://i.imgur.com/your-image-url.png)

### Deployment

The application can be deployed to any cloud hosting provider that supports NodeJS and MongoDB.

### Support

If you encounter any issues, please create an issue on the GitHub repository.
