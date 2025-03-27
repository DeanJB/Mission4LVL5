# L5Mission4Frontend

This directory contains the frontend application for the Mission3 project.

## Features

- Interactive chatbot powered by AI for insurance policy assistance.
- Responsive design with a hero section and navigation bar.
- Built with React and styled using CSS modules.

## Setup

### Prerequisites

- Node.js
- Docker (optional for containerized deployment)

### Steps

1. Install dependencies:
      ```bash
      npm install
      ```
2. Start the application:
      ```bash
      npm start
      ```
3. The application will run at `http://localhost:5173`.

## Docker

### Build and Run

1. Build the Docker image:
      ```bash
      docker build -t frontend-app .
      ```
2. Run the container:
      ```bash
      docker run -p 5173:5173 frontend-app
      ```

The frontend will be accessible at `http://localhost:5173`.

## Project Structure

- **`src/components`**: Contains reusable React components like `Nav`, `Hero`, and `ChatBot`.
- **`src/geminiAPI.js`**: Handles communication with the backend API.

## Key Components

### `Nav`

- Displays the navigation bar with a logo and menu items.

### `Hero`

- Provides a guide for users to interact with the chatbot.

### `ChatBot`

- An AI-powered chatbot for assisting users in finding insurance policies.

## API Integration

The frontend communicates with the backend at `http://localhost:4000/insurance` to send and receive messages for the chatbot.

## License

This project is licensed under the MIT License.
