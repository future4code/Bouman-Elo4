import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ComponentLogin from './Components/ComponenteLogin/Index'
import ComponenteLista from './Components/ComponenteLista'

/* paleta de cores: https://coolors.co/f29711-5ce1e6-2e86ab-a23b72-c73e1d */

function App() {
  return (
    <div className="App">
      <ComponenteLista></ComponenteLista>
    </div>
  );
}

export default App;
