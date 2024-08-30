## README: ShowTime - Movie Booking Webapp

### Overview

ShowTime is a web application built using the MERN (MongoDB, Express.js, React, Node.js) stack for the frontend and Flask for the backend. It provides a user-friendly platform for booking movie tickets. 

### Features

* **User Registration and Login:** Users can create accounts and log in to access the platform.
* **Movie Listings:** The application displays a list of currently available movies with their showtimes, theaters, and prices.
* **Seat Selection:** Users can choose their preferred seats for a movie.
* **Booking Confirmation:** Upon successful payment, users receive a booking confirmation with details.

### Technologies Used

* **Frontend:**
  * React.js: A JavaScript library for building user interfaces.
  * Material-UI: A component library for creating visually appealing interfaces.
* **Backend:**
  * Node.js: A JavaScript runtime environment for server-side applications.
  * MongoDB: A NoSQL database for storing application data.
* **Server:**
  * Flask: A Python web framework for handling API requests.
* **Containerization:**
  * Docker: An open platform for developing, shipping, and running applications.

### Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/TensorTrove/ShowTime.git
   ```
2. **Install dependencies:**
   ```bash
   cd showtime/frontend
   npm install -g yarn
   yarn install
   ```
3. **Set up environment variables:**
   Create a `.env` file and add the necessary environment variables, such as:
   ```
   MOVIE_API='Your TheMovieDB API key'
   MONGO='tankit999'
   HALL_ID=66bf46afe053d1e3839094eb
   ```
4. **Start the development server:**
   ```bash
   yarn start
   ```
5. **Run the Flask server:**
   ```bash
   cd backend
   python -m venv env
   .\env\Scripts\activate
   pip install -r req.txt
   python .\server.py
   ```

### Contributing

Contributions to ShowTime are welcome! Please follow the project's guidelines for contributing.
