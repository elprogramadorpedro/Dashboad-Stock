# Stock Dashboard with React and Vite

## Introduction

This project is a stock dashboard designed to help businesses and individuals efficiently manage their product inventories. It enables the creation, listing, updating, and deletion of products, as well as their classification into categories. Developed using React, Vite, and CSS, it offers a user-friendly and reactive interface for smooth and effective inventory management.
![Group 316](https://github.com/elprogramadorpedro/Dashboad-Stock/assets/44806088/b5dd55d8-4037-4792-b217-547cdc0380f4)

## Features

- **Product Management**: Allows users to create, list, update, and delete products from their inventory.
- **Product Categorization**: Products can be classified into categories for efficient organization and search.
- **Friendly Interface**: A clear and simple user interface that facilitates inventory management.
- **Responsive Design**: Compatible with mobile and desktop devices, ensuring access at any time and place.

## Project architecture

src/
├── App.jsx                  
├── index.css                
├── main.jsx                
├── router.jsx               
├── components/              
│   ├── DeleteButton.jsx     
│   ├── ItemForm.jsx         
│   ├── ItemsTable.jsx      
├── contexts/                
│   ├── stockContext.jsx     
├── entities/                
│   ├── stockItem.js         
├── hooks/                   
│   ├── useStock.jsx         
├── pages/                   
│   ├── Home.jsx             
│   ├── RootLayout.jsx       
│   ├── items/               
│       ├── CreateItems.jsx  
│       ├── Layout.jsx       
│       ├── ListItems.jsx    
│       ├── ShowItem.jsx     
│       ├── UpdateItem.jsx   

## Documentation

| Directory/File                   | Description                                                               |
|----------------------------------|---------------------------------------------------------------------------|
| `src/`                           | Root directory for source files.                                          |
| `src/App.jsx`                    | Main application component that sets up the router and context providers. |
| `src/index.css`                  | Global stylesheet for the application.                                    |
| `src/main.jsx`                   | Entry point of the application, initializes React app.                    |
| `src/router.jsx`                 | Configures application routes using React Router.                         |
| `src/components/`                | Contains reusable UI components.                                          |
| `src/components/DeleteButton.jsx`| Button component for deleting items.                                      |
| `src/components/ItemForm.jsx`    | Form component for adding or editing items.                               |
| `src/components/ItemsTable.jsx`  | Table component to display items in a list.                               |
| `src/contexts/`                  | Holds React context for state management.                                 |
| `src/contexts/stockContext.jsx`  | Provides a context for stock management.                                  |
| `src/entities/`                  | Contains models or entities used in the application.                      |
| `src/entities/stockItem.js`      | Defines the stock item entity.                                            |
| `src/hooks/`                     | Custom React hooks for shared logic across components.                    |
| `src/hooks/useStock.jsx`         | Hook for accessing stock context functionality.                           |
| `src/pages/`                     | Components representing different pages in the application.               |
| `src/pages/Home.jsx`             | The home page component.                                                  |
| `src/pages/RootLayout.jsx`       | Component for the root layout of the application.                         |
| `src/pages/items/`               | Directory for item-related page components.                               |
| `src/pages/items/CreateItems.jsx`| Page component for creating new items.                                    |
| `src/pages/items/Layout.jsx`     | Layout component for item pages.                                          |
| `src/pages/items/ListItems.jsx`  | Page component for listing all items.                                     |
| `src/pages/items/ShowItem.jsx`   | Page component for showing a single item's details.                       |
| `src/pages/items/UpdateItem.jsx` | Page component for updating an item.                                      |



## Technologies Used

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [Vite](https://vitejs.dev/): A new frontend build tool that significantly improves the development experience.
- CSS: For styling and designing the user interface.
- react-router-dom

## How to Install and Run

1. **Clone the repository**

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

2. **Install dependencies**

```bash
npm install
```

3. **Execute the project**

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser to see the application working.

## How to Contribute

Contributions are what make the open source community an amazing place to learn, inspire, and create. Any contributions you make will be **greatly appreciated**.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - Pedro Villalba - elprogramadorpedro@gmail.com

Project link: https://github.com/elprogramadorpedro/Dashboad-Stock

#React+Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs .io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
