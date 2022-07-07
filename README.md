# Challenge Nextail by Mireia Suero 👩🏻‍💻

## About The Project

This project is an example of an application that controls the stock analysis of a store.

In it you will see a products list and check the detail of each product (name, image, code, stockout, coverage). Also, you can mark a product as completed after reviewing it.

## Built with 🚀

* [React](https://reactjs.org) as a javascript library.
* [Sass](https://sass-lang.com/) as CSS framework.
* [Material UI](https://mui.com/) as a component library 
* [DX React Chart](https://devexpress.github.io/devextreme-reactive/react/chart/) as a chart library with Material UI

## Getting Started ⚙️

First, install the dependencies
  ```shell
  npm install
  ```

Run it
  ```shell
  npm start
  ```

This runs the app in the development mode. Open http://localhost:3000 to view it in the browser.

## Comments 📚

I have chosen React as the framework for the exercise, as it is the one I am most familiar with. To create the project, I used [Create React App](https://create-react-app.dev/) and added SASS to work with the styles.

## Functionality 🕹️

To handle the different functionalities requested, the application uses different components. 

- App: Contains the Header component (it is only visual) and the ProducsList component, which contains the rest of the components.

- ProductList: The state of the product list is handled in this component using the hook useState and doing a previous fetch of the product JSON. It is also in charge of rendering the list of products and and update the state when a product is marked complete.

- ProductDetail: In charge of rendering the detailed information of each product and confirming if we want to mark a product as complete, to update the state in the ProductList.

- ProductSizeStock: This component renders the chart with the size data. To make this component I use the Devexpress chart library that also uses Material UI, following this [example](https://devexpress.github.io/devextreme-reactive/react/chart/demos/bar/simple-bar).

- ProductStockout: In charge of rendering the stockout section and the progress bar with the corresponding percentage. To make this component I used the Material UI and the component [LinearProgress](https://mui.com/material-ui/react-progress/#linear)

## Improvements 📝

- Improve the visual appearance of the bar chart, on the steps of value axis. Due to time constraints, I was unable to better investigate the use of the library to do so.

- Improve the confirmation dialog. In a first implementation I used the Material UI [Dialog](https://mui.com/material-ui/react-dialog/), but I found some problems with it so I replaced it with something more basic using window.confirm. I would like to investigate these issues with more time.
