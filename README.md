# Goals List Application

This project is a simple **Goals List Application** built using **React Native**. It allows users to add, view, and delete goals dynamically. The app is structured to ensure clarity and maintainability, with components such as `App.js`, `GoalInput.js`, and `GoalItem.js`.

## Features

- Add new goals to the list.
- Display the list of goals dynamically.
- Delete goals by tapping on them.
- Input validation to prevent adding empty goals.

## Project Structure

```
├── App.js
├── components
│   ├── GoalInput.js
│   └── GoalItem.js
├── assets
│   └── images
│       └── goal.png
└── README.md
```

### File Descriptions:

- **`App.js`**: The main file containing the application logic and state management.
- **`GoalInput.js`**: A modal component that handles user input and validation.
- **`GoalItem.js`**: A component to render each goal item with the ability to delete it.
- **`assets/images/goal.png`**: A decorative image used in the `GoalInput` modal.

## Installation

Follow these steps to run the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/HariPrayudha/Goals-List.git
   cd Goals-List
   ```

2. **Install dependencies:**
   Ensure you have `Node.js` and `npm`/`yarn` installed.
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the application:**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Run on a device or simulator:**
   - Follow the instructions provided by Expo to open the app on your device or emulator.

## Technologies Used

- **React Native**
- **Expo**
- **JavaScript**

## How It Works

1. Click the `Add New Goal` button to open the modal.
2. Enter a goal in the text input field.
3. Click the `Add Goal` button to save the goal to the list.
4. Tap on a goal to delete it from the list.
5. Empty inputs are not allowed, and an error message will appear if attempted.

## Contributions

Contributions are welcome! Feel free to fork this repository, make changes, and submit a pull request.

## License

This project is licensed under the [MIT License](./LICENSE).

---

### Author

**Hari Prayudha**

- [GitHub Profile](https://github.com/HariPrayudha)
- [LinkedIn](https://www.linkedin.com/in/hari-prayudha)
