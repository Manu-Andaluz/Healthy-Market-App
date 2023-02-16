import React from 'react';
import Card from './Card';

function Prueba() {
  return (
    <div>
      <Card
        status="Disponible"
        name="Ensalada"
        price={8.99}
        image="https://recetasdepollo.online/wp-content/uploads/2017/09/ensalada-cesar-con-pollo.jpg"
        details="Una deliciosa ensalada de lechuga, tomate, pepino y aderezo ranch."
      />
    </div>
  );
}  

export default Prueba;