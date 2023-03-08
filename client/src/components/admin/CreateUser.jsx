import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const CreateUser = () => {
  const dispatch = useDispatch();
  const { createStatus } = useSelector((state) => state.allProducts);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");

  useEffect(() => {
    if (createStatus === "success") {
      toast("Producto Creado");
    }
  }, [createStatus]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // dispatch(
    //   createProduct({
    //     name,
    //     category,
    //     price,
    //     details,
    //     stock,
    //     image: productImg,
    //   })
    // );
  };

  const createUser = async () => {
    try {
      const res = await axios.post(
        `https://healthy-market-app-production.up.railway.app/users/createUser`,
        {
          name,
          surname,
          email,
          nationality,
        }
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledCreateProduct>
      <StyledForm onSubmit={handleSubmit}>
        <h3>Creación del Usuario</h3>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="surname"
          placeholder="Apellido"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <select onChange={(e) => setNationality(e.target.value)} required>
          <option value="">Nacionalidad</option>
          <option value="Argentina">Argentina</option>
          <option value="México">México</option>
          <option value="Colombia">Colombia</option>
          <option value="Chile">Chile</option>
        </select>

        <button
          onClick={() => createUser()}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          {"Enviar" === "pending" ? "Enviando ..." : "Enviar"}
        </button>
      </StyledForm>
    </StyledCreateProduct>
  );
};

export default CreateUser;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-top: 2rem;

  select,
  input {
    padding: 7px;
    min-height: 30px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(182, 182, 182);
    margin: 0.3rem 0;

    &:focus {
      border: 2px solid rgb(0, 208, 255);
    }
  }

  select {
    color: rgb(95, 95, 95);
  }
`;

const StyledCreateProduct = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImagePreview = styled.div`
  margin: 2rem 0 2rem 2rem;
  padding: 2rem;
  border: 1px solid rgb(183, 183, 183);
  max-width: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: rgb(78, 78, 78);

  img {
    max-width: 100%;
  }
`;
