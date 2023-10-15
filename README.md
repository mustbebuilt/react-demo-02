# React Film App

## Backend

Written in Typescript with Mongoose for a MongoDb Backend.

In terminal navigate to `backend` and compile typescript with

`tsc`

Run with npm with:

`npm start`

Runs on port 3030.

## Frontend

In separate terminal window navigate to `frontend` and build in reactJS start with:

`npm start`

Runs on port 3000.

### Application Overview

This simple React application demonstrates how to load data from an API endpoint and display it in a component. It consists of two components: `ApiDataDisplay` and `Film`. Here's an explanation of how these components work:

1. **ApiDataDisplay.js:**

   - This component is responsible for fetching and displaying data from an API. It uses React hooks, specifically `useState` and `useEffect`, to manage state and side effects.

   - `useState` is used to create two state variables: `data` and `loading`. `data` will store the API response data, and `loading` is a boolean to indicate whether the data is still being loaded.

   - Inside the `useEffect` hook, an API endpoint (in this case, `'http://localhost:3030/api'`) is defined as the URL to fetch data from. You should replace this URL with the actual API endpoint you want to use.

   - The `fetch` function is used to make a GET request to the API endpoint. The response is checked for errors, and if there are no errors, the response is converted to JSON using `response.json()`. The retrieved data is then set in the `data` state variable, and the `loading` state is set to `false`.

   - If there is an error during the API request, an error message is logged to the console, and the `loading` state is set to `false`.

   - In the `return` statement, the component displays a heading, "API Data," and conditionally renders content based on the `loading` state. If `loading` is `true`, it displays "Loading data..."; otherwise, it maps over the `data` array and renders a list of `Film` components.

2. **Film.js:**

   - The `Film` component is a simple functional component that receives a `film` object as a prop.

   - Inside the component, it displays the title of the film from the `film` object. It uses the `filmTitle` property from the `film` object and renders it within an `li` element.

   - This component is designed to be used in the list rendering within the `ApiDataDisplay` component. It takes a single film object and displays its title.

In summary, `ApiDataDisplay` is the main component responsible for fetching and displaying data from an API, while `Film` is a subcomponent used to render individual film titles. This application demonstrates a common pattern for loading and displaying data in a React application and is often used as a starting point for more complex data fetching and rendering tasks in real-world applications.