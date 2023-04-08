import "./sidebar.css";
import {
  Insights,
  LineStyle,
  InsertChart,
  LocationCity,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h4 className="sidebarTitle">Dashboard</h4>
          <ul className="sidebarList">
            <Link  style={{textDecoration:'none'}} to="/population">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon " /> Sales by Country
              </li>
            </Link>
            <Link style={{textDecoration:'none'}} to="/industries">
              <li className="sidebarListItem">
                <InsertChart className="sidebarIcon" /> Profit by Industries
              </li>
            </Link>

            <Link style={{textDecoration:'none'}} to='/'>
              <li className="sidebarListItem">
                <Insights className="sidebarIcon" /> Sales per Year
              </li>
            </Link>
            <Link style={{textDecoration:'none'}} to='/overall'>
              <li className="sidebarListItem">
                <LocationCity className="sidebarIcon" />
                Overall Data
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
