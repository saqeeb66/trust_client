import { Routes, Route } from "react-router-dom";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Causes from "./pages/Causes";
import Gallery from "./pages/Gallery";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";

// Admin
import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./admin/Dashboard";
import ManageBanners from "./admin/ManageBanners";
import ManageContent from "./admin/ManageContent";
import ManageGallery from "./admin/ManageGallery";
import ManageNotices from "./admin/ManageNotices";
import ContactQueries from "./admin/ContactQueries";
import AdminProfile from "./admin/AdminProfile";

import ProtectedRoute from "./components/ProtectedRoute";
import MainLayout from "./layout//MainLayout";

function Router() {
  return (
    <Routes>
      {/* HOME — has its own Navbar & Footer */}
      <Route path="/" element={<Home />} />

      {/* PUBLIC PAGES — shared Navbar & Footer */}
      <Route element={<MainLayout />}>
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Causes />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* ADMIN — NO Navbar / Footer */}
      <Route path="/admin/login" element={<AdminLogin />} />

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/banners"
        element={
          <ProtectedRoute>
            <ManageBanners />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/content"
        element={
          <ProtectedRoute>
            <ManageContent />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/gallery"
        element={
          <ProtectedRoute>
            <ManageGallery />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/notices"
        element={
          <ProtectedRoute>
            <ManageNotices />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/queries"
        element={
          <ProtectedRoute>
            <ContactQueries />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/profile"
        element={
          <ProtectedRoute>
            <AdminProfile />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default Router;
