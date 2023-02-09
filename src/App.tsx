import './App.css';
import './scss/custom.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AppBar from './components/AppBar';
import JobsPage from './pages/JobsPage';
import { NAV_LINKS } from './utils/constants';
import BlogPage from './pages/BlogPage';
import ProfilePage from './pages/ProfilePage';
import JobDetailPage from './pages/JobDetailPage';
import ErrorPage from './pages/ErrorPage';
import AboutPage from './pages/AboutPage';
import JobAppsPage from './pages/JobAppsPage';

const router = createBrowserRouter([
  { path: NAV_LINKS.HOME, element: <HomePage />, errorElement: <ErrorPage /> },
  { path: NAV_LINKS.LOGIN, element: <LoginPage /> },
  { path: NAV_LINKS.JOBS, element: <JobsPage /> },
  { path: `${NAV_LINKS.JOBS}/:jobId`, element: <JobDetailPage /> },
  { path: NAV_LINKS.JOBS_APPLIED, element: <JobAppsPage /> },
  { path: NAV_LINKS.BLOG, element: <BlogPage /> },
  { path: NAV_LINKS.PROFILE, element: <ProfilePage /> },
  { path: NAV_LINKS.ABOUT, element: <AboutPage /> },
]);

function App() {
  return (
    <div className="App-page">
      <AppBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
