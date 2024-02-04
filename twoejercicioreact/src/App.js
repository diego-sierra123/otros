import React, { useState, useEffect } from 'react';
import './App.css';
import './componentescss/estilo.css';

function App() {
  const [taller1, setTaller1] = useState('');
  const [taller2, setTaller2] = useState('');
  const [taller3, setTaller3] = useState('');
  const [parcial, setParcial] = useState('');
  const [trabajoFinal, setTrabajoFinal] = useState('');
  const [promedio, setPromedio] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [calculated, setCalculated] = useState(false);

  useEffect(() => {
    console.log('La página se ha cargado');
  }, []);

  const calcular = () => {
    const isValid = validarNotas();
    if (!isValid) {
      setErrorMessage('Por favor ingrese números enteros positivos entre 0 y 50 en todos los campos.');
      setPromedio('');
    } else {
      const promedioTalleres = (parseFloat(taller1) + parseFloat(taller2) + parseFloat(taller3)) / 3;
      const promedioMateria = Math.round(promedioTalleres * 0.55 + parseFloat(parcial) * 0.3 + parseFloat(trabajoFinal) * 0.15);
      setPromedio(promedioMateria);
      setErrorMessage('');
    }
    setCalculated(true);
  };


  const validarNotas = () => {
    const notas = [taller1, taller2, taller3, parcial, trabajoFinal];
    return notas.every(nota => !isNaN(parseFloat(nota)) && Number.isInteger(parseFloat(nota)) && nota !== '' && parseFloat(nota) >= 0 && parseFloat(nota) <= 50);
  };

  const formatNumber = (number) => {
    if (Number.isInteger(number)) {
      return number.toString();
    } else {
      return number.toFixed(2);
    }
  };


  return (
    <div className="centrar">
      <form className="formulario" style={{ borderRadius: '20px', border: '4px solid gray' }}>
        <div className="text-center">
          <h2 className="text-white"><b>PROMEDIO DE 5 NOTAS DE LA MATERIA DE ALGORITMOS</b></h2>
        </div>
        <br />
        {!calculated && (
          <>
            <div className="mb-3">
              <label className="form-label text-white"><b>TALLER 1:</b></label>
              <input type="number" placeholder="Ingrese la nota del taller 1" className="form-control" value={taller1} onChange={(e) => setTaller1(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label text-white"><b>TALLER 2:</b></label>
              <input type="number" placeholder="Ingrese la nota del taller 2" className="form-control" value={taller2} onChange={(e) => setTaller2(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label text-white"><b>TALLER 3:</b></label>
              <input type="number" placeholder="Ingrese la nota del taller 3" className="form-control" value={taller3} onChange={(e) => setTaller3(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label text-white"><b>PARCIAL:</b></label>
              <input type="number" placeholder="Ingrese la nota del parcial" className="form-control" value={parcial} onChange={(e) => setParcial(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label text-white"><b>TRABAJO FINAL:</b></label>
              <input type="number" placeholder="Ingrese la nota del trabajo final" className="form-control" value={trabajoFinal} onChange={(e) => setTrabajoFinal(e.target.value)} />
            </div>
            <div className="text-white">
              <b><span className="text-danger">NOTA:</span> El promedio de las 5 notas aparecerá en la parte inferior después de ingresar las notas y dar clic en "Calcular Promedio".</b>
            </div>
            <br />
            <div className="text-center">
              <button type="button" className="btn btn-primary pri" style={{ border: '2px solid black' }} onClick={calcular}>Calcular Promedio</button>
            </div>
            <br />
          </>
        )}

        {errorMessage && calculated && (
          <div>
            <h4 className="text-center text-white" style={{ border: '4px solid black', borderRadius: '12px', padding: '10px' }}>{errorMessage}</h4>
          </div>
        )}

        {promedio !== '' && calculated && (
          <div>
            <div className="text-center text-white" style={{ border: '4px solid black', borderRadius: '12px', padding: '10px' }}>
              <h4><b>Promedio de la nota de los 3 talleres: <span style={{ color: 'black' }}>{formatNumber((parseFloat(taller1) + parseFloat(taller2) + parseFloat(taller3)) / 3)}</span></b></h4>
              <h4><b>Nota del parcial: <span style={{ color: 'black' }}>{parcial}</span></b></h4>
              <h4><b>Nota del trabajo final: <span style={{ color: 'black' }}>{trabajoFinal}</span></b></h4>
              <h4><b>Valor del porcentaje de los 3 talleres 55%: <span style={{ color: 'black' }}>{formatNumber(((parseFloat(taller1) + parseFloat(taller2) + parseFloat(taller3)) / 3) * 0.55)}</span></b></h4>
              <h4><b>Valor del porcentaje del parcial 30%: <span style={{ color: 'black' }}>{formatNumber(parcial * 0.3)}</span></b></h4>
              <h4><b>Valor del porcentaje del trabajo final 15%: <span style={{ color: 'black' }}>{formatNumber(trabajoFinal * 0.15)}</span></b></h4>
              <h4><b>El promedio de la materia es: <span style={{ color: 'red' }}>{promedio}</span></b></h4>
            </div>
          </div>
        )}

        {calculated && (
          <div className="text-center">
            <button type="button" className="btn btn-secondary sec" style={{ border: '2px solid black' }} onClick={() => { setTaller1(''); setTaller2(''); setTaller3(''); setParcial(''); setTrabajoFinal(''); setPromedio(''); setErrorMessage(''); setCalculated(false); }}>Reintentar</button>
          </div>
        )}

      </form>
    </div>
  );
}

export default App;
