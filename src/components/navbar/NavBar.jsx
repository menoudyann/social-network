import { SearchOutlined } from "@mui/icons-material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link } from "react-router-dom";
import "./navBar.scss";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>YMD Social</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlined />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon />
        <MailOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/17340537/pexels-photo-17340537/free-photo-of-man-standing-on-beach-near-water-in-town.jpeg"
            alt=""
          />
          <span>Yann Menoud</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
