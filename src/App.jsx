// import React from 'react';

import { UseForm } from './UseForm';

const App = () => {
  const [values, handleChange] = UseForm({email: '', password: ''});
  

  return (
    <div className="body">
      <h1>Sign In</h1>
      <form>
        <div className="email-field">
          <input
            type="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="pass-field">
          <input
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="btn" type="submit">Sign In</button>
        </div>
      </form>
    </div>
  )
}

export default App;