import styled from "styled-components";
import { Outlet, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state) => state.user);

  if (!user.isAdmin) return <p>Access denied. Not an Admin!</p>;

  let activeStyle = {
    color: "#03C988",
  };

  return (
    <StyledDashboard>
      <SideNav>
        <NavLink to="/home">← Volver</NavLink>
        <h3>DashBoard</h3>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/admin/summary"
        >
          Estadísticas
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/admin/products"
        >
          Productos
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/admin/orders"
        >
          Ordenes
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/admin/users"
        >
          Usuarios
        </NavLink>
      </SideNav>
      <Content>
        <Outlet />
      </Content>
    </StyledDashboard>
  );
};

export default Dashboard;

const StyledDashboard = styled.div`
  display: flex;
  height: 100vh;
`;

const SideNav = styled.div`
  border-right: 1px solid gray;
  height: calc(100vh - 70px);
  position: fixed;
  overflow-y: auto;
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  h3 {
    margin: 0 0 1rem 0;
    padding: 0;
    text-transform: uppercase;
    font-size: 17px;
  }

  a {
    text-decoration: none;
    margin-bottom: 1rem;
    font-size: 14px;
  }
`;

const Content = styled.div`
  margin-left: 200px;
  padding: 2rem 3rem;
  width: 100%;
`;
