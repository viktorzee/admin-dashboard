import { KeyboardArrowUp, MonetizationOnOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import PersonOutlineOutlined from "@mui/icons-material/PersonOutlineOutlined"
import { WidgetType } from "../../type";
import "./widget.scss"

// interface Type {
//   type: {
//     "user": string,
//     "order" : string
//   }
// }


const Widget = ( { type }: WidgetType):JSX.Element => {
  let data;
  const amount:number = 100;
  const diff:number = 20

  if (type === "user") {
    data = {
      title: "USERS",
      isMoney: false,
      link: "See all users",
      icon: <PersonOutlineOutlined className="icon" style={{
        color:"crimson",
        backgroundColor: "rgba(255, 0, 0, 0.2)"
      }} />
    }
  }
  else if (type === "order") {
    data = {
      title: "ORDERS",
      isMoney: false,
      link: "See all orders",
      icon: (
        <ShoppingCartOutlined
          className="icon"
          style={{
            color: "goldenrod",
            backgroundColor: "rgba(218, 165, 32, 0.2)",
          }}
        />
      ),
    };
  }
  else if (type === "earning") {
    data = {
      title: "EARNINGS",
      isMoney: true,
      link: "See all earnings",
      icon: (
        <MonetizationOnOutlined
          className="icon"
          style={{
            color: "green",
            backgroundColor: "rgba(0, 125, 0, 0.2)",
          }}
        />
      ),
    };
  }
  else if (type === "balance") {
    data = {
      title: "BALANCE",
      isMoney: true,
      link: "See details",
      icon: (
        <AccountBalanceWalletOutlinedIcon
          className="icon"
          style={{
            backgroundColor: "rgba(128, 0, 128, 0.2)",
          }}
        />
      ),
    };
  }


  return (
      <div className="widget">
      <div className="left">
        <span className="title uppercase">
          {data?.title}
        </span>
        <span className="counter">
          {data?.isMoney && "$"}{amount}
        </span>
        <span className="link">
          {data?.link
          }
        </span>

      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp />
          { diff }%
        </div>
        {data?.icon}
      </div>
    </div>
  )
}

export default Widget