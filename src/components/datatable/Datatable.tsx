import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userColumns, rows } from "../../datatabalesource";
import "./datatable.scss"



const columns = userColumns;

const row = rows;

export default function DataTable() {

  const [data, setData] = useState(row)

  const handleDelete = (id: number) => {
    setData(data.filter(d => d.id !== id));
    console.log("Delete")
  }

  const actionColumn: GridColDef[] = [
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => (
        <div className="cellAction" style={{ height: 400, width: "100%" }}>
          <div className="viewButton">
            <Link to="/users/single" style={{ textDecoration: "none" }}>
              <FontAwesomeIcon icon={faEye} />
            </Link>
          </div>
          <div className="deleteButton">
            <FontAwesomeIcon
              icon={faTrash}
              color="red"
              onClick={() => handleDelete(params.row.id)}

              style={{
                cursor: "pointer"
              }}
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div style={{ height: 400, width: "100%" }} className="datatable">
      <div className="datatableTitle">
        Add new User
        <Link to="/users/new" className="link">
         Add New
        </Link>
      </div>
      <DataGrid
        rows={row}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        className="dataContent"
      />
    </div>
  );
}
