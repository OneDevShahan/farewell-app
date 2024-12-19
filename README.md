# Farewell Countdown App

![React](https://img.shields.io/badge/React-18.2.0-blue) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3.2-blueviolet) ![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-brightgreen)

A sleek, interactive countdown timer to mark your farewell or any special occasion, built with **React** and styled using **Tailwind CSS**.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Real-Time Countdown**: Displays the days, hours, and minutes left until the target date.
- **Dark Mode Support**: Aesthetic support for dark and light themes.
- **Navigation Buttons**: Includes links to the "Wish" and "Profile" sections with modern icon integration.
- **Responsive Design**: Looks great on all devices.

## Demo

Check out the live demo here:
[Live Demo](https://OneDevShahan.github.io/farewell-app)

## Installation

Follow these steps to run the app locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/OneDevShahan/farewell-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd farewell-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Usage

1. **Update Target Date**: Pass your desired date to the `Countdown` component using the `targetDate` prop.
   ```jsx
   <Countdown targetDate="2025-01-13T00:00:00" />
   ```
2. **Custom Styling**: Modify the styles using Tailwind CSS classes in the component files.

## Deployment

Deploy your app to GitHub Pages:

1. Add the `homepage` field in `package.json`:
   ```json
   "homepage": "https://<username>.github.io/<repository>"
   ```
2. Add deployment scripts in `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
3. Run the deployment command:
   ```bash
   npm run deploy
   ```
4. Access the deployed app at:
   ```
   https://<username>.github.io/<repository>
   ```

## Screenshots

### Light Mode
![Light Mode](/public/Light_Mode_Screenshot.png)

### Dark Mode
![Dark Mode](/public/Dark_Mode_Screenshot.png)

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

