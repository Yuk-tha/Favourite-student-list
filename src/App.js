import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import StudentList from "./pages/StudentList";
import FavouriteStudents from "./pages/FavouriteStudents";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<StudentList />} />

        <Route
          path="/favourites"
          element={<FavouriteStudents />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;