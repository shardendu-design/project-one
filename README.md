# Project 1: Shared Shopping List

# Shopping List Application (Deno.js)

This is a simple shopping list application built using Deno.js, featuring a layered architecture with views, controllers, services, and a database. The application allows users to manage their shopping lists efficiently.

## Features
- Create a shopping list name
- Display shopping lists with a create shopping list form
- Deactivate a shopping list name
- View individual shopping lists
- Add items to the shopping list
- Mark items as collected from the shopping list
- View the total number of shopping lists and items on the main page

## Requirements

- [Deno](https://deno.land/) (v1.35.0 or higher)

## Getting Started

1. **Download Starter code from project submission:**
    ```
    https://fitech101.aalto.fi/web-software-development/20-course-project-i/2-project-submission-and-reviews/
    ```

2. **Navigate to the project directory:**
    ```
    Implement the functionality in the folder shopping-lists. Create all controllers, services, views, and app.js inside the shopping-list folder.
    ```

3. **Run the application:**
    ```
    docker-compose up
    ```

4. **Open your web browser:**
    Visit `http://localhost:7777` to use the shopping list application main page, which should display with Shared Shopping List and Statistics of shopping lists and shopping list items.

## Usage
- **Click List:** On the main page to enter the create shopping list page.
- **Add Shopping List:** Enter the name of the shopping list and click the "Create a new shopping list" button.
- **Deactivate List:** Each list name has a Deactivate button, allowing you to deactivate it as needed.
- **View Individual List:** Click on a displayed list to enter the individual list.
- **Add Items:** Enter the name of the item and click the "Add Item" button.
- **Mark Collect:** Click on the item you wish to mark as collected from the list.
- **Navigate to Another Page:** Each page has a link to move to another page. The main page has a List link to go to the create list page.

## File Structure

- `app.js`: Main application file.
- `utils/`: Contains utility functions.
- `database/`: Contains database connection.
- `views/`: Contains all the eta layout and files.
- `services/`: Contains service functionality.
- `controllers/`: Contains controller functionality.
- `deps.js/`: Contains all the Deno dependencies.

## Dependencies

This project uses Deno standard modules and does not require additional dependencies.

## Contributing

If you would like to contribute to this project, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [Aalto Course License](LICENSE).
