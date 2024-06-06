import { Route, Routes, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import PublisherHome from './PublisherHome';
import PageNotFound from '../main/PageNotFound';
import '../reader/reader.css'

import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import PublishNews from './PublishNews';
import ViewMyNews from './ViewMyNews';

import ViewNews from '../main/News';

import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import UpdateMyNews from './UpdateMyNews';
import AddComment from './../main/AddComment';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PublisherLogin from './PublisherLogin';

export default function PublisherNavbar() {
  const [publisherData, setPublisherData] = useState("");

  useEffect(() => {
    const storedPublisherData = localStorage.getItem('publisher');
    if (storedPublisherData) {
      const parsedPublisherData = JSON.parse(storedPublisherData);
      setPublisherData(parsedPublisherData);
    }
  }, []);

  const notifyInfo = (msg) => toast.info(msg, {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // For smooth scrolling
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('isPublisherLoggedIn');
    localStorage.removeItem('publisher');
    notifyInfo("Logged out !");
    // navigate("/publisherlogin");
    window.location.reload();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <nav>
        <ul>
          <li>
            <p>Hi {publisherData.username}</p>
          </li>
          <li>
            <Link to="/">Matches</Link>
          </li>
          <li>
            <Link to="/viewnews">NEWS</Link>
          </li>
          <li className="dropdown">
            <Link>
              <FeedOutlinedIcon />
            </Link>
            <div className="dropdown-content">
              <Link to="/publishnews">Publish NEWS</Link>
              <Link to="/viewmynews">View My NEWS</Link>
            </div>
          </li>
          <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
        <li></li><li></li><li></li><li></li><li></li>
          <div onClick={handleLogout} style={{ cursor: 'pointer' }}>
      <Link to="/publisherlogin">
        <LogoutSharpIcon style={{ color: 'white' }} />
      </Link>
    </div>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<PublisherHome />} exact />
        <Route path="/updatemynews" element={<UpdateMyNews />} exact />
        <Route path="/viewnews" element={<ViewNews />} exact />
        <Route path="/viewmynews" element={<ViewMyNews />} exact />
        <Route path="/publishnews" element={<PublishNews />} exact />

        <Route path="/addcomment" element={<AddComment/>} exact/>
        <Route path="/publisherlogin" element={<PublisherLogin/>} exact />

        <Route path="*" element={<PageNotFound />} exact />
      </Routes>
      <div style={{ position: 'fixed', bottom: '0px', right: '10px', zIndex: '1000' }}>
        <button onClick={scrollToTop} style={{ backgroundColor: 'transparent', border: '1px solid black', outline: 'none', cursor: 'pointer' }}>
          <KeyboardArrowUpOutlinedIcon style={{ fontSize: '20px', color: '#000' }} />
        </button>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: "lightgray", textAlign: "center", padding: "5px", marginTop: "auto", height: "30px" }}>
        <p style={{ color: "rgba(0, 0, 0, 0.5)", margin: "0" }}>@MVK2024</p>
      </footer>
    </div>
  );
}
