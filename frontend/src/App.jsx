// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// // import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React from "react";
import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg flex overflow-hidden">
        {/* Left Side (Image) */}
        <div className="w-1/2 hidden md:block">
          <img
            src="https://www.nestleprofessional.in/sites/default/files/2022-08/MAGGI-Noodles-Chilli-Paneer-756x471.jpg"
            alt="Left Background"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side (Login Form) */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
            Welcome!
          </h1>
          <p className="text-gray-500 text-center mb-6">
            Log in to your account
          </p>

          <form className="space-y-6">
            {/* Email Field */}
            <TextField
              fullWidth
              label="Your Email"
              type="email"
              variant="outlined"
              className="!mb-2"
            />

            {/* Password Field */}
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <button className="text-sm text-blue-600 hover:underline">
                    Forgot Password?
                  </button>
                ),
              }}
            />

            {/* Remember Me Checkbox */}
            <div className="flex items-center justify-between">
              <FormControlLabel
                control={<Checkbox />}
                label="Remember Me"
                className="text-gray-500"
              />
            </div>

            {/* Login Button */}
            <Button
              fullWidth
              variant="contained"
              className="!bg-blue-600 hover:!bg-blue-700"
            >
              Login
            </Button>
          </form>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Login */}
          <div className="flex justify-center space-x-4 mb-6">
            <Button
              variant="outlined"
              className="flex items-center space-x-2 border-gray-300 hover:border-blue-500"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                alt="Google"
                className="h-5"
              />
              <span>Continue with Google</span>
            </Button>
            <Button
              variant="outlined"
              className="flex items-center space-x-2 border-gray-300 hover:border-blue-500"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                className="h-5"
              />
              <span>Continue with Facebook</span>
            </Button>
          </div>

          {/* Sign-Up Link */}
          <p className="text-center text-gray-500 text-sm">
            Don’t have any account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
