# UnEarthed - Gift Ideas Web App

A crowdsourced repository of great gift ideas for different kinds of people. Browse gifts by intended audience, price point, or category, or upload your own gift ideas!

## Features

- **Home Page**: Displays a list of all available gifts with images, names, price points, and target audiences
- **Gift Detail Pages**: Click on any gift to see detailed information including description, submitter, and submission date
- **Responsive Design**: Works on desktop and mobile devices
- **404 Error Handling**: Proper error page for invalid routes
- **Modern UI**: Clean, card-based design with hover effects

## Sample Gifts

The app includes sample gifts for various audiences:
- **Gamers**: Wireless Gaming Headset ($$)
- **Coffee Lovers**: Artisan Coffee Beans ($)
- **Fitness Enthusiasts**: Smart Fitness Tracker ($$$)
- **Minimalists**: Handmade Ceramic Mug ($)
- **Photographers**: Professional Camera Lens ($$$$)

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Backend**: Node.js, Express.js
- **Build Tool**: Vite
- **Development**: Nodemon for auto-restart

## Getting Started

### Prerequisites
- Node.js (latest version)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bkodzo/unearthed.git
cd unearthed
```

2. Install server dependencies:
```bash
cd server
npm install
```

3. Install client dependencies:
```bash
cd ../client
npm install
```

### Running the Application

1. Start the server (from the server directory):
```bash
cd server
npm start
```
The server will run on http://localhost:3001

2. Start the client development server (from the client directory):
```bash
cd client
npm run dev
```
The client will run on http://localhost:5173

3. Open your browser and navigate to http://localhost:5173

### Building for Production

To build the client for production:
```bash
cd client
npm run build
```

This will create optimized files in the `server/public` directory.

## Project Structure

```
unearthed/
├── client/                 # Frontend application
│   ├── public/            # Static files
│   │   ├── scripts/       # JavaScript files
│   │   ├── 404.html       # Error page
│   │   ├── gift.html      # Gift detail page
│   │   └── logo.svg       # App logo
│   ├── index.html         # Main HTML file
│   ├── style.css          # Stylesheet
│   └── vite.config.js     # Vite configuration
├── server/                # Backend application
│   ├── data/              # Data files
│   │   └── gifts.js       # Gift data
│   ├── routes/            # API routes
│   │   └── gifts.js       # Gifts API endpoints
│   ├── public/            # Built client files
│   ├── server.js          # Main server file
│   └── package.json       # Server dependencies
└── README.md              # This file
```

## API Endpoints

- `GET /` - Server status
- `GET /gifts` - Get all gifts
- `GET /gifts/:id` - Get gift detail page

## Contributing

This is a lab project for learning web development with Node.js and Express. Feel free to fork and experiment with additional features!

## License

This project is for educational purposes.
