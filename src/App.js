import React, { useState } from 'react';
import './App.css';

function App() {
  // Estados para manejar la entrada del usuario y los resultados
  const [valorInicial, setValorInicial] = useState('');
  const [resultado15, setResultado15] = useState(null);
  const [resultado30, setResultado30] = useState(null);
  const [resultado40, setResultado40] = useState(null);
  const [resultado50, setResultado50] = useState(null);

  // Función para calcular porcentajes al hacer clic en el botón
  const calcularPorcentajes = () => {
    // Convertir el valor de entrada a un número
    const valor = parseFloat(valorInicial);

    if (!isNaN(valor)) {
      // Calcular los resultados
      const descuento15 = valor - valor * 0.15;
      const ganancias30 = valor + valor * 0.30;
      const ganancias40 = valor + valor * 0.40;
      const ganancias50 = valor + valor * 0.50;

      // Actualizar los estados con los resultados
      setResultado15(descuento15);
      setResultado30(ganancias30);
      setResultado40(ganancias40);
      setResultado50(ganancias50);
    } else {
      // Si la entrada no es un número, restablecer los resultados
      setResultado15(null);
      setResultado30(null);
      setResultado40(null);
      setResultado50(null);
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de Porcentajes</h1>

      <label>Ingrese el valor del producto:</label>
      <input
        type="number"
        value={valorInicial}
        onChange={(e) => setValorInicial(e.target.value)}
      />

      <button onClick={calcularPorcentajes}>Calcular</button>

      <div>
        <h2>Resultados:</h2>
        <p>Descuento del 15%: {resultado15}</p>
        <p>Ganancias del 30%: {resultado30}</p>
        <p>Ganancias del 40%: {resultado40}</p>
        <p>Ganancias del 50%: {resultado50}</p>
      </div>
    </div>
  );
}
export default App; 

