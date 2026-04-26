import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import AdminLayout from "./Components/Admin/AdminLayout";
import Home from "./Components/Admin/Home";
import PostJobs from "./Components/Admin/PostJobs";
import PostNewJob from "./Components/Admin/PostNewJob";
import ManageJobs from "./Components/Admin/ManageJobs";
import Courses from "./Components/Admin/Courses";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Talents from "./Components/Admin/Talents";
import ComingSoon from "./Components/ComingSoon";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Home />} />
          
          {/* Job Posting Routes */}
          <Route path="postjob" element={<PostJobs />} />
          <Route path="postjob/new" element={<PostNewJob />} />
          <Route path="postjob/manage" element={<ManageJobs />} />
          
          {/* Courses Routes */}
          <Route path="courses" element={<Courses />} />
          <Route path="courses/new" element={<Courses />} /> {/* Use existing Courses component */}
          <Route path="courses/manage" element={<Courses />} /> {/* Use existing Courses component */}
          
          {/* Users Routes */}
          <Route path="users" element={<Home />} /> {/* Users shows same as home for now */}
          <Route path="users/add" element={<ComingSoon />} />
          
          {/* Coaching/Talents Routes */}
          <Route path="coaching" element={<Talents />} /> {/* Use existing Talents component */}
          <Route path="coaching/sessions" element={<Talents />} /> {/* Use existing Talents component */}
          <Route path="coaching/coaches" element={<Talents />} /> {/* Use existing Talents component */}
          
          {/* Settings Route */}
          <Route path="settings" element={<ComingSoon />} />
          
          {/* Legacy route for talents */}
          <Route path="talents" element={<Talents />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
