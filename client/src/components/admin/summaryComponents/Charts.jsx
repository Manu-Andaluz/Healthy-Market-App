import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const [sales, setSales] = useState();
  const [loading, setLoading] = useState(true);

  function compare(a, b) {
    if (a._id < b._id) return 1;
    if (a._id > b._id) return -1;
    else return 0;
  }

  const days = ["Lunes,Martes,Miércoles,Jueves,Viernes,Sábado,Domingo"];

  async function fetchTotal() {
    try {
      const res = await axios.get(`http://localhost:5000/order/income`);
      res.data.sort(compare);
      const newData = res.data.map((item) => {
        return {
          day: days[item._id],
          amount: item.total,
        };
      });
      setSales(newData);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchTotal();
  }, []);

  return (
    <>
      {loading ? (
        <Loader> Cargando Gráfico ... </Loader>
      ) : (
        <StyledChart>
          <h3>Ultimos 7 días</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={sales}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="amount"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </StyledChart>
      )}
    </>
  );
};

export default Chart;

const StyledChart = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 2rem;
  padding: 1rem;
  border: 2px solid rgba(48, 51, 78, 0.2);
  border-radius: 5px;
  h3 {
    margin-bottom: 1rem;
  }
`;

const Loader = styled.p`
  margin-top: 2rem;
`;
