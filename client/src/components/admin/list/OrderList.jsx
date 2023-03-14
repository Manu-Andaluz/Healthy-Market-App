import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setHeaders } from "../../../slices/apiSlice";

export default function OrderList() {
  const [oders, setOrders] = useState();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        `https://healthy-market-app-production.up.railway.app/order`,
        setHeaders()
      );
      setOrders(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteOrder = async (orderId) => {
    try {
      const res = await axios.delete(
        `https://healthy-market-app-production.up.railway.app/order/${orderId}`,
        setHeaders()
      );
      const newList = oders.filter((item) => item._id !== res.data._id);
      setOrders(newList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const rows =
    oders &&
    oders.map((order) => {
      return {
        id: order._id,
        name: order.shipping.userName,
        email: order.shipping.userEmail,
        total: "$" + order.total.toLocaleString(),
        delivery_status: "pending",
        payment_status: "paid",
        createdAt: order.createdAt,
      };
    });

  const columns = [
    { field: "name", headerName: "Nombre", width: 150 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "delivery_status", headerName: "Envío", width: 130 },
    { field: "payment_status", headerName: "Pago", width: 130 },
    { field: "total", headerName: "Total", width: 130 },
    { field: "createdAt", headerName: "Fecha de Compra", width: 160 },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 80,
      renderCell: (params) => {
        return (
          <Actions>
            <button
              onClick={() => dispatch(deleteOrder(params.id))}
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Eliminar
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
