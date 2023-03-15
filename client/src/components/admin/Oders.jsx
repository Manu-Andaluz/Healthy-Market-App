import { Outlet } from "react-router-dom";

const OrdersDashboard = () => {
  return (
    <>
      <div className="my-5 flex w-full justify-between items-center">
        <h2>Ordenes DashBoard</h2>
      </div>
      <Outlet />
    </>
  );
};

export default OrdersDashboard;
