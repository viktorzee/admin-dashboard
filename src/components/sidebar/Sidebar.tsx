import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isDark, isLight } from "../../state-management/features/darkmode/darkModeSlice";
import admin from "../../assets/admin.png";

const Sidebar = () => {
  const dispatch = useDispatch();
  
  const handleWhiteMode = (): void => {
    dispatch(isLight())
  }
  const handleDarkMode = (): void => {
    dispatch(isDark())
  }

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span><img src={admin} alt="admin" className="logo-img"/></span>
          <span className="logo">Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title uppercase">Main</p>
          <li>
            <DashboardIcon className="icon" />
            <Link to="/" style={{ textDecoration: "none" }}>
              <span>Dashboard</span>
            </Link>
          </li>
          <p className="title uppercase">Lists</p>
          <li>
            <PersonOutlineOutlinedIcon className="icon" />
            <Link to="/users" style={{ textDecoration: "none" }}>
              <span>Users</span>
            </Link>
          </li>
          <li>
            <StoreIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <CreditCardIcon className="icon" />
            <Link to="/products" style={{ textDecoration: "none" }}>
              <span>Products</span>
            </Link>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title uppercase">Userful</p>
          <li>
            <InsertChartIcon className="icon" />
            <span> Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icon" />
            <span> Notifications</span>
          </li>
          <p className="title uppercase">Service</p>
          <li>
            <SettingsSystemDaydreamIcon className="icon" />
            <span> System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span> Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span> Settings</span>
          </li>
          <p className="title uppercase">User</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span> Profile</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className="icon" />
            <span> Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={handleWhiteMode}></div>
        <div className="colorOption" onClick={handleDarkMode}></div>
      </div>
    </div>
  );
}

export default Sidebar