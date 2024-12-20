import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Homepage from "./pages/index";
import About from "./pages/about";
import News from "./pages/new";
import Events from "./pages/events";
import Admin from "./pages/admin";
import Login from "./pages/login";
import Register from "./pages/register";
import AdminEvent from "./pages/admin-event";
import Leaderships from "./pages/leaderships";
import AdminLeadership from "./pages/admin-leadership";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/news" element={<News />} />
      <Route path="/events" element={<Events />} />
      <Route path="/leaderships" element={<Leaderships />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin-event/:id" element={<AdminEvent />} />
      <Route path="/admin-leadership/:id" element={<AdminLeadership />} />
    </Route>
  )
);

export default router;
