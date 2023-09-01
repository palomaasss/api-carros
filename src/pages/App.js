import axios from 'axios';
import './App.scss';
import { useEffect, useState } from 'react';

function App() {
  
  const [tipoSelecionado, setTipoSelecionado] = useState('')
  const [ modelo, setModelo] =useState('')
  const [ marca, setMarca] =useState('')
  const [ placa, setPlaca] =useState('')
  const [ ano, setAno] =useState('')

  

  async function conexao() {
    let url = 'http://localhost:5000/cliente'
    let resp = await axios.get(url);
    setTipoSelecionado(resp.data)
  }

  useEffect(() => {

    conexao();
  }, [])


  return (
    <div className="App">
      <div className='center'>
        <h1>Novo veículo</h1>
        <select  id="veiculo" name="veiculo" value={tipoSelecionado} onChange={e => setTipoSelecionado(e.target.value)} >
          <option> selecione </option>

        </select> 



        <div className='inputs' >
          <h1>Modelo</h1>
          <input type='text' value={modelo} onChange={e => setModelo(e.target.value)}/>
        </div>


        <div className='inputs'>
          <h1> Marca</h1>
          <input type='text' value={marca} onChange={ e => setMarca(e.target.value)} />
        </div>


        <div className='inputs'>
          <h1> Ano</h1>
          <input type='text' value={ano} onChange={ e => setAno(e.target.value)}/>
        </div>


        <div className='inputs'>
          <h1> Placa</h1>
          <input type='text' value={placa} onChange={ e => setPlaca(e.target.value)}/>
        </div>

        

      </div>
    </div>
  );
}

export default App;
