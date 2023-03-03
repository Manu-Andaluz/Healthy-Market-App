import styled from "styled-components";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const AllTimeData = () => {
  const [products, setProducts] = useState(0);
  const [orders, setOrders] = useState(0);
  const [users, setUsers] = useState(0);
  const [income, setIncome] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/products`);
      setProducts(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchOrders = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/order`);
      setOrders(res.data.length);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/users`);
      setUsers(res.data.length);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchIncome = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/order/allTimeIncome`);
      setIncome(res.data[0]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchOrders();
    fetchUsers();
    fetchIncome();
  }, []);

  return (
    <>
      {loading ? (
        <p>Cargando Datos ...</p>
      ) : (
        <Main>
          <h3>Todos los Datos</h3>
          <Info>
            <Title>Usuarios</Title>
            <Data>{users && users}</Data>
          </Info>
          <Info>
            <Title>Productos</Title>
            <Data>{products && products.length}</Data>
          </Info>
          <Info>
            <Title>Ordenes</Title>
            <Data>{orders && orders}</Data>
          </Info>
          <Info>
            <Title>Ganancias</Title>
            <Data>${income && income.total.toLocaleString()}</Data>
          </Info>
        </Main>
      )}
    </>
  );
};

export default AllTimeData;

const Main = styled.div`
  margin-top: 1rem;
  background: rgb(48, 51, 78);
  color: rgba(234, 234, 255, 0.87);
  border-radius: 5px;
  padding: 1rem;
  font-size: 14px;
`;

const Info = styled.div`
  display: flex;
  margin-top: 1rem;
  background: rgba(38, 198, 249, 0.12);
  border-radius: 3px;
  padding: 0.5rem;
  &:nth-child(even) {
    background: rgba(102, 108, 255, 0.12);
  }
`;

const Title = styled.div`
  flex: 1;
`;

const Data = styled.div`
  flex: 1;
  font-weight: 700;
`;
