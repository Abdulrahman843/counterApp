# Counter App

This project implements a simple counter app where a counter is incremented every second. The app provides **Start** and **Stop** buttons to control the counter. The counter's value is logged to the browser's console. This application demonstrates the use of `setInterval`, `clearInterval`, and event listeners in JavaScript.

## Features

- **Start Button**: Begins counting from 0 and increments every second.
- **Stop Button**: Stops the counter.
- **Console Output**: The current value of the counter is logged to the browser console.

## Technologies Used

- **HTML**: For creating the page structure and buttons.
- **JavaScript**: For implementing the counter functionality and handling user input (via event listeners).
- **Git**: For version control and managing the project.

## How to Use

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Abdulrahman843/counter-app.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd counter-app
    ```

3. **Open the `index.html` file in your browser**:
    You can open the file by double-clicking it or use the following command depending on your operating system:
    - **Windows**: `start index.html`
    - **macOS**: `open index.html`
    - **Linux**: `xdg-open index.html`

4. **Use the app**:
    - Click **Start!** to begin counting, and the counter value will be logged to the browser's console every second.
    - Click **Stop!** to stop the counter.

## Example

1. **Click on the "Start!" button** to begin the counter. You will see the counter incrementing every second in the console.
2. **Click on the "Stop!" button** to stop the counter.

### How It Works:
- The counter is controlled by the `setInterval()` function, which runs a function every second to increment the counter. 
- The `clearInterval()` function is used to stop the counter when the "Stop!" button is clicked.
- Event listeners are attached to the "Start!" and "Stop!" buttons to trigger the start and stop actions.

## Contribution

Feel free to fork this repository, make improvements, or submit pull requests. Contributions are welcome!

## License

This project is open-source and available under the [MIT License](LICENSE).
