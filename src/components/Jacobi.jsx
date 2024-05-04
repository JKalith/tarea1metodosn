import { useState } from 'react';
import InsertarMatrixJacobi from "./InsertarMatrixJacobi";
import MatrizInicialJacobi from './MatrixInicialjacobi';
import MessageModal from './MessageModal';

const Jacobi = () => {
  const [columns, setColumns] = useState('');
  const [rows, setRows] = useState('');
  const [matrix, setMatrix] = useState([]);
  const [maxIter, setMaxIter] = useState('')
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [err, setErr] = useState('')

  const handleBtn = () => {
    //if (false) {
   //   setErrorDialogOpen(true);
    //} else {
      // Generar la matriz con las dimensiones dadas
      const newMatrix = [];
      for (let i = 0; i < parseInt(rows); i++) {
        const newRow = [];
        for (let j = 0; j <= parseInt(columns); j++) {
          newRow.push(''); // Inicializa los valores como números
        }
        newMatrix.push(newRow);
      }
      setMatrix(newMatrix);
   // }
  };

  const handleChangeCell = (i, j, value) => {
    const newMatrix = [...matrix];
    newMatrix[i][j] = value;
    setMatrix(newMatrix);
  };

  const handleCloseErrorDialog = () => {
    setErrorDialogOpen(false);
  };

  return (
    <div className='container'>
      <InsertarMatrixJacobi columns={columns} setColumns={setColumns} rows={rows} setRows={setRows} handleBtn={handleBtn} setMaxIter={setMaxIter} maxIter={maxIter} err={err} setTol={setErr} />
      {matrix.length > 0 && (
        <div className='matrix__inicial'>
          <h2>Matriz Inicial Jacobi</h2>
          <MatrizInicialJacobi matrix={matrix} handleChangeCell={handleChangeCell} setMatrix={setMatrix} maxIter={maxIter} err={err}/>
        </div>
      )}
      <MessageModal errorDialogOpen={errorDialogOpen} handleCloseErrorDialog={handleCloseErrorDialog} />
    </div>
  );
};

export default Jacobi;