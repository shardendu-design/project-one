# Project 1: Shared shopping list

# Shopping List Application (Deno.js)

This is a simple shopping list application built using Deno.js, a layered architecture with views, controllers, services, and databse . This application allows users to manage their shopping lists efficiently.

## Features
- Create shopping list name
- Display shoping list with create shopping list form
- Deactivate shopping list name
- View Individual shopping list
- Add items to the shopping list
- Mark Collect items from the shopping list
- View total number of shopping list and items in main page


## Requirements

- [Deno](https://deno.land/) (v1.35.0 or higher)

## Getting Started

1. **Downlaod Starter code from project submission:**

    ```https://fitech101.aalto.fi/web-software-development/20-course-project-i/2-project-submission-and-reviews/
    ```

2. **Navigate to the project directory:**

    ```Implement the functionality to the folder shopping-lists, create all controllers,services,views and app.js inside the shopping-list folder
    ```

3. **Run the application:**

    ```
    docker-compose up
    ```

4. **Open your web browser:**

    Visit `http://localhost:7777` to use the shopping list application main page nad it should display wirh Shared Shopping List and Stattistics of shopping list and shopping list items.

## Usage
- **Clcik List:** In main page to enter create shopping list page.
- **Add shopping List:** Enter the name of the shopping list and click the "Create a new shopping list" button.
- **Diactivate List:** There is Deactivate button with each list name so you can deactivate it as per your need.
- **View Individual List:** Click on displayed list to eneter into individual list.
- **Add Items:** Enter the name of the item and click the "Add Item" button.
- **Mark Collect:** Click on the item you wish to Mark Collect from the list.
- **Go to another page:** Each Page has link to move another page, main page has List link to go to create list page,create list.

## File Structure

- `app.js`: Main application file.
- `utils/`: Contains utility functions.
- `database/`: contain databse connection.
- `database/`: contain databse connection.
- `views/`: contain all the eta layout and files.
- `services/`: contain service functionality.
- `controllers/`: contain controller functionality.
- `deps.js/`: contain all the deno dependency.

## Dependencies

This project uses Deno standard modules and does not require additional dependencies.

## Contributing

If you would like to contribute to this project, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [aalto course License](LICENSE).



