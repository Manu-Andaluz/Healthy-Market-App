import UsersList from "./list/UsersList";
import { Outlet, useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="my-5 flex w-full justify-between items-center">
        <h2>Usuarios DashBoard</h2>
        <button
          onClick={() => navigate("/admin/users/create-user")}
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Crear Usuario
        </button>
      </div>
      <Outlet />
    </>
  );
};

export default UserDashboard;
