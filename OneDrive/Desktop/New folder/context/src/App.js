import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Header from "./components/Header";
import Cart from "./components/Cart";
import SignInRoute from "./routes/SignInRoute";
import AuthProtectedRoute from "./routes/AuthProtectedRoute";
import SignOut from "./components/SignOut";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signin"
          element={
            <SignInRoute>
              <SignIn />
            </SignInRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <AuthProtectedRoute>
              <Cart />
            </AuthProtectedRoute>
          }
        />
        <Route path="/signout" element={<SignOut />} />
      </Routes>
    </>
  );
}

export default App;
