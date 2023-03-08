import { Outlet, useNavigate } from "react-router-dom";

const ProductsDashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="my-5 flex w-full justify-between items-center">
        <h2>Productos DashBoard</h2>
        <button
          onClick={() => navigate("/admin/products/create-product")}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Crear Producto
        </button>
      </div>
      <Outlet />
    </>
  );
};

export default ProductsDashboard;
