import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Charts from "../../components/charts/Charts";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Tables from "../../components/table/Tables";
import "./single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="edit">
              <FontAwesomeIcon icon={faPen} color="#7551f818" />
            </div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://m.media-amazon.com/images/I/71R5B9pRjXL._AC_SX679_.jpg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemName">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@mail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">234815245235</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">3, Bengs street</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Nigeria</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Charts
              aspect={3 / 1}
              title="User Spending in the last Six(6) Months"
            />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Information</h1>
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default Single;
