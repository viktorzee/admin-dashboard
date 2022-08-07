import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./tables.scss"


const Tables = () => {
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL.AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1st March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 229585,
      product: "PlayStation 5",
      img: "https://m.media-amazon.com/images/I/51lVhQLZn+L._AC_SY300_SX300_.jpg",
      customer: "John Doe",
      date: "1st March",
      amount: 960,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 235771,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71mIkTVDwKL._AC_SX679_.jpg",
      customer: "Jaden Smit",
      date: "1st March",
      amount: 920,
      method: "Online",
      status: "Pending",
    },
    {
      id: 2342355,
      product: "ASUS ROG",
      img: "https://m.media-amazon.com/images/I/71R5B9pRjXL._AC_SX679_.jpg",
      customer: "Harold Carol",
      date: "1st March",
      amount: 2000,
      method: "Online",
      status: "Approved",
    },
  ];
  return (
    <TableContainer component={Paper} className="tables">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID </TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}>
              <TableCell className="tableCell" component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell className="tableCell" component="th" scope="row">
              
                <div className="cellWrapper" >
                  <img src={row.img} alt={row.product} className="image" />
                  {row.product} 
                </div>
              </TableCell>
              <TableCell className="tableCell" >{row.customer}</TableCell>
              <TableCell className="tableCell" >{row.date}</TableCell>
              <TableCell className="tableCell" >{row.amount}</TableCell>
              <TableCell className="tableCell" >{row.method}</TableCell>
              <TableCell className="tableCell" ><span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
