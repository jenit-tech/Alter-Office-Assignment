# **Social Media Feed**

A responsive, interactive social media feed application built with React, Firebase, and Tailwind CSS. The application supports user authentication, posting content (text and images), and infinite scrolling to load more posts dynamically.


## **Features**

- User authentication (login/logout).
- Add and display posts with text and images.
- Infinite scrolling for loading posts dynamically.
- Fully responsive design.
- Modular and reusable components.
- Backend powered by Firebase (Authentication and Firestore).


## **Tech Stack**

### **Frontend**
- **React**: Component-based UI library.
- **Tailwind CSS**: Utility-first CSS framework for styling.

### **Backend**
- **Firebase**:
  - **Authentication**: For user login/logout.
  - **Firestore**: To store and retrieve posts data.


## **Getting Started**

### **Prerequisites**
Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v14+)
- [npm](https://www.npmjs.com/) (v6+)
- [Firebase CLI](https://firebase.google.com/docs/cli)



### **Installation**

1. **Clone the repository**
  
   git clone https://github.com/latha0001/Social-Media-Feed
   cd social-media-feed
 

2. **Install dependencies**
   
   npm install
  

3. **Set up Firebase**
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Add a web app and copy the Firebase config.
   - Replace the placeholder values in `src/firebase.js` with your Firebase credentials.

4. **Run the development server**
   
   npm run dev
  

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.



## **Project Structure**

social-media-feed/
├── public/             # Static files
│   ├── index.html
├── src/                # Source code
│   ├── components/     # Reusable React components
│   ├── context/        # Context API for state management
│   ├── styles/         # CSS and styling
│   ├── firebase.js     # Firebase configuration
│   ├── App.js          # Root component
│   ├── index.js        # Entry point
├── .env                # Environment variables
├── package.json        # Project metadata and dependencies
├── tailwind.config.js  # Tailwind CSS configuration
├── README.md           # Documentation


## **Available Scripts**

### **Run the development server**

npm run dev


### **Build for production**

npm run build


### **Preview the production build**

npm run preview


## **Deployment**

### **Firebase Hosting**
1. Install Firebase CLI:
  
   npm install -g firebase-tools
  
2. Initialize Firebase Hosting:
 
   firebase init

3. Deploy the app:
 
   firebase deploy


### **Vercel**
1. Install Vercel CLI:
  
   npm install -g vercel
  
2. Deploy the app:

   vercel deploy
  

## **Contributing**

Contributions are welcome! If you have suggestions or encounter any issues, feel free to open an issue or submit a pull request.


## **License**

This project is licensed under the [MIT License](LICENSE).


## **Acknowledgments**

Special thanks to the open-source community for providing the tools and libraries used in this project. 😊
