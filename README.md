# ShowTime

<p align="center" width="100%" height="100%">
    <img width="33%" src="https://i.pinimg.com/564x/bc/2a/05/bc2a05e398a55163568f0f9b8a66b27a.jpg"> 
</p>

ShowTime is a modern web application for booking movie tickets. The platform offers users an easy and intuitive way to browse movies, check available showtimes, book seats, and view their booking details. The application is built using the MERN stack for the frontend and Flask for the backend.

## Features

- **Movie Browsing**: Browse the latest movies and check their details.
- **Booking System**: Select showtimes and book your preferred seats.
- **User Authentication**: Sign up and sign in securely.
- **Booking Confirmation**: Receive a detailed bill and booking confirmation.
- **Responsive Design**: Access the application across various devices.

## Directory Structure

```plaintext
ShowTime/
├── backend
│   ├── Dockerfile
│   ├── req.txt
│   ├── sample.env
│   └── server.py
├── CODE_OF_CONDUCT.md
├── frontend
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── README.md
│   ├── src
│   │   ├── animations
│   │   │   └── index.js
│   │   ├── App.js
│   │   ├── components
│   │   │   ├── finalbill.jsx
│   │   │   ├── hallselect.jsx
│   │   │   ├── homepage.jsx
│   │   │   ├── login.jsx
│   │   │   ├── logohome.jsx
│   │   │   ├── preloader.css
│   │   │   ├── Preloader.jsx
│   │   │   ├── searchbar.jsx
│   │   │   ├── searchpage.jsx
│   │   │   ├── seatbooking.jsx
│   │   │   ├── seatselection.jsx
│   │   │   └── signup.jsx
│   │   ├── images
│   │   │   ├── image1.png
│   │   │   ├── image2.jpg
│   │   │   ├── image3.jpg
│   │   │   └── screen.svg
│   │   ├── index.css
│   │   └── index.js
│   ├── tailwind.config.js
│   └── yarn.lock
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
├── sample
│   ├── WhatsApp Image 2024-08-31 at 1.17.12 AM (1).jpeg
│   ├── WhatsApp Image 2024-08-31 at 1.17.12 AM2.jpeg
│   ├── WhatsApp Image 2024-08-31 at 1.17.12 AM.jpeg
│   ├── WhatsApp Image 2024-08-31 at 1.17.13 AM2.jpeg
│   ├── WhatsApp Image 2024-08-31 at 1.17.13 AM.jpeg
│   ├── WhatsApp Image 2024-08-31 at 1.17.14 AM (1).jpeg
│   └── WhatsApp Image 2024-08-31 at 1.17.14 AM.jpeg
└── yarn.lock
```

## Screenshots

### Home Page

![alt text](<sample/WhatsApp Image 2024-08-31 at 1.17.14 AM (1).jpeg>)
### Sign-In Page

![alt text](<sample/WhatsApp Image 2024-08-31 at 1.17.12 AM2.jpeg>)
### Movie Selection

![alt text](<sample/WhatsApp Image 2024-08-31 at 1.17.14 AM.jpeg>)

### Booking Confirmation

![alt text](<sample/WhatsApp Image 2024-08-31 at 1.17.12 AM (1).jpeg>)

### Theatre Selection
![alt text](<sample/WhatsApp Image 2024-08-31 at 1.17.13 AM2.jpeg>)
### Seat Booking

![alt text](<sample/WhatsApp Image 2024-08-31 at 1.17.12 AM.jpeg>)

### Billing
![alt text](<sample/WhatsApp Image 2024-08-31 at 1.17.13 AM (1).jpeg>)
## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Python with Flask

### Installation

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

### Usage

1. Sign up or sign in.
2. Browse available movies, select your desired showtime, and book your seats.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any bug fixes or new features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Authors

- [@ankitdey-marsh](https://www.github.com/ankitdey-marsh)
- [@Terminal127](https://www.github.com/Terminal127)
- [@debjit-mandal](https://www.github.com/debjit-mandal)
- [@nilotpal-basu](https://www.github.com/nilotpal-basu)
