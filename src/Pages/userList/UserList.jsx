import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  }
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "Product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="ProductListUser">
            <img className="ProductListImg" src={params.row.avatar} alt="" />
            {params.row.UserName}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "status",
      width: 90,
    },
    {
      field: "transaction",
      headerName: "transaction Volume",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="userListbuttons">
            <Link to={"/users/"+params.row.id}>
            <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon className="userListDelete" onClick={() => handleDelete(params.row.id)} />
          </div>
        );
      },
    },
  ];



  return (
    <div className="UserList">
      <DataGrid
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        pageSize={8}
        // pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};
export default UserList;
