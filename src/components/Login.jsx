import './Login.css'	

function Login() {
  return (
    <div className='centralizado'>
      <h1>Login</h1>
      <form className="login-form">
        <input type="text" placeholder="Usuário" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export default Login