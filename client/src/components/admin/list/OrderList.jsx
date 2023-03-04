import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";

export default function OrderList() {
  const [oders, setOrders] = useState();
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        `https://healthy-market-app-production.up.railway.app/order`
      );
      setOrders(res.data);
      setLoading(false);
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
        name: order.shipping.name,
        adress: order.shipping.adress,
        total: order.total,
        delivery_status: order.delivery_status,
        payment_status: order.payment_status,
        createdAt: order.createdAt,
      };
    });

  const columns = [
    { field: "name", headerName: "Nombre", width: 130 },
    { field: "adress", headerName: "Dirección", width: 130 },
    { field: "delivery_status", headerName: "Envío", width: 130 },
    { field: "payment_status", headerName: "Pago", width: 130 },
    { field: "total", headerName: "Total", width: 130 },
    { field: "createdAt", headerName: "Fecha de Compra", width: 200 },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 150,
      renderCell: (params) => {
        return (
          <Actions>
            <button
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
