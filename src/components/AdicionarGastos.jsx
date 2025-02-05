import { useState } from 'react';
import './AdicionarGastos.css';


function AdicionarGastos({gastos, setGastos}) {

  //atualiza o estado do formulario
  const [formData, setFormData] = useState({
    descricao: '',
    categoria: '',
    valor: '',
    data: ''
  });

  //atualiza o estado da lista de gastos
  const [erro, setErro] = useState(null)

  //atualiza o estado do formulario
  const attFormulario = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  //adiciona os dados do formulario a lista de gastos
  const adcDadosFormALista = (e) => {
    e.preventDefault();

    if (!formData.descricao || !formData.categoria || !formData.valor || !formData.data) {
      setErro("Todos os campos são obrigatórios.");
      return;
    }

    const novoGasto = { ...formData };
    setGastos([...gastos, novoGasto]);
    setFormData({    
      descricao: '',
      categoria: '',
      valor: '',
      data: ''
    });
    setErro(null);
  };

  return (
  <>
  <div className='centralizado'>
    <form className='AdicionarGastos'  onSubmit={adcDadosFormALista}>
      {erro && <p className="erro">{erro}</p>}

      <label htmlFor='descricao'>Descrição</label>
      <input type="text" id='descricao' name='descricao' value={formData.descricao} onChange={attFormulario} placeholder="Descrição" />

      <label htmlFor='categoria'>Categoria</label>
      <select id='categoria' name='categoria' value={formData.categoria} onChange={attFormulario} required>
        <option value=''>Selecione</option>
        <option value='alimentacao'>Alimentação</option>
        <option value='contas'>Contas de Casa</option>
        <option value='transporte'>Transporte</option>
        <option value='lazer'>Lazer</option>
        <option value='entreterimento'>Entretenimento</option>
        <option value='outros'>Outros</option>
      </select>

      <label htmlFor="valor">Valor</label>
      <input type="text" id="valor" name="valor" value={formData.valor} onChange={attFormulario} placeholder="R$" />

      <label htmlFor="data">Data</label>
      <input type="date" id="data" name="data" value={formData.data} onChange={attFormulario} required />

      <button type="submit">Adicionar</button>
    </form>
    </div>
  </>  
  )
}

export default AdicionarGastos