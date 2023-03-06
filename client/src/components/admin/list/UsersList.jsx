import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../actions/userActions";

export default function UserList() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const fetchUsers = async () => {
    try {
      const res = await axios.get(
        `https://healthy-market-app-production.up.railway.app/users`
      );
      setUsers(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      const res = await axios.delete(`http://localhost:5000/users/${userId}`);
      const newList = users.filter((item) => item._id !== res.data._id);
      setUsers(newList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const rows =
    users &&
    users.map((user) => {
      return {
        id: user._id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        nationality: user.nationality,
      };
    });

  const columns = [
    { field: "id", headerName: "ID", width: 220 },
    { field: "name", headerName: "Nombre", width: 130 },
    { field: "surname", headerName: "Apellido", width: 130 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "nationality", headerName: "Nacionalidad", width: 130 },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 150,
      renderCell: (params) => {
        return (
          <Actions>
            <button
              onClick={() => dispatch(deleteUser(params.id))}
              type="button"
              class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Eliminar
            </button>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Editar
            </button>
          </Actions>
        );
      },
    },
  ];

  return (
    <div style={{ height: 600, width: "100%" }}>
      {loading ? (
        <h2>Loading ...</h2>
      ) : (
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelectison
          disableSelectionOnClick
        />
      )}
    </div>
  );
}

const ImageContainer = styled.button`
  display: flex;
  margin: 0 auto;
  background-color: transparent;
  border: none;
  align-items: center;
  img {
    height: 40px;
  }
`;

const Actions = styled.button`
  border: none;
  background-color: transparent;
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    border: none;
    outline: none;
    padding: 3px 5px;
    color: white;
    border-radius: 3px;
    cursor: pointer;
  }
`;

const Delete = styled.button`
  background-color: rgb(255, 77, 73);
`;

const View = styled.button`
  background-color: rgb(126, 221, 2);
`;

const Update = styled.button`
  background-color: rgb(60, 21, 225);
`;
