import { UseForm } from './UseForm';

const App = () => {
  const [values, handleChange] = UseForm({email: '', password: ''});

  
  return (
    <div className="body">
      <h1>Sign In</h1>
      <form className="form-field">
        <input
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
        <button className="btn" type="submit">Sign In</button>
      </form>
    </div>
  )
}

export default App;