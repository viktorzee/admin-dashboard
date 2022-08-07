import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid"

export const userColumns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 0 },
  {
    field: "user",
    headerName: "User",
    sortable: false,
    width: 230,
    renderCell: (params: GridValueGetterParams) => (
      <div className="cellWithImg">
        <img
          src={params.row.img}
          alt={params.row.username}
          className="cellImg"
        />
        {params.row.username}
      </div>
    ),
  },
  { field: "email", headerName: "Email", width: 230 },
  {
    field: "status",
    headerName: " Status",
    width: 130,
    renderCell: (params: GridValueGetterParams) => (
      <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
      </div>
    ),
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 100,
  },
];

export const rows = [
  {
    id: 1,
    name: "Kimberlee Stidfole",
    username: "Kimberlee",
    img: "https://minimaltoolkit.com/images/randomdata/female/96.jpg",
    status: "active",

    email: "Sincere@april.biz",
    age: 45,
  },
  {
    id: 2,
    name: "Rodrick Berglund",
    username: "Rodrick",
    img: "https://minimaltoolkit.com/images/randomdata/male/10.jpg",
    status: "passive",

    email: "Shanna@melissa.tv",
    age: 42,
  },
  {
    id: 3,
    name: "Aron Frances",
    username: "Aron",
    img: "https://minimaltoolkit.com/images/randomdata/male/82.jpg",
    status: "passive",

    email: "Nathan@yesenia.net",
    age: 33,
  },
  {
    id: 4,
    name: "Matha Hakeman",
    username: "Matha",
    img: "https://minimaltoolkit.com/images/randomdata/female/72.jpg",
    status: "active",
    email: "Julianne.OConner@kory.org",
    age: 25,
  },
  {
    id: 5,
    name: "Antonia Tarbill",
    username: "Tarbil",
    img: "https://minimaltoolkit.com/images/randomdata/male/7.jpg",
    status: "pending",
    email: "Lucio_Hettinger@annie.ca",
    age: 60,
  },
  {
    id: 6,
    name: "Sunny Daddato",
    username: "Daddato",
    img: "https://minimaltoolkit.com/images/randomdata/female/70.jpg",
    status: "passive",
    email: "Karley_Dach@jasper.info",
    age: 28,
  },
  {
    id: 7,
    name: "Vilma Saltzt",
    username: "Vilma Saltz",
    img: "https://minimaltoolkit.com/images/randomdata/female/19.jpg",
    status: "active",
    email: "Telly.Hoeger@billy.biz",
    age: 55,
  },
  {
    id: 8,
    name: "Elliot Rundstrom",
    username: "Rundstrom",
    status: "pending",
    img: "https://minimaltoolkit.com/images/randomdata/male/71.jpg",
    email: "Sherwood@rosamond.me",
    age: 35,
  },
  {
    id: 9,
    name: "Arturo Guilfoil",
    username: "Guilfoil",
    img: "https://minimaltoolkit.com/images/randomdata/male/14.jpg",
    status: "passive",

    email: "Chaim_McDermott@dana.io",
    age: 39,
  },
  {
    id: 10,
    name: "Carlie Hguyen",
    username: "Hguyen",
    img: "https://minimaltoolkit.com/images/randomdata/female/41.jpg",
    status: "active",
    email: "Rey.Padberg@karina.biz",
    age: 50,
  },
];