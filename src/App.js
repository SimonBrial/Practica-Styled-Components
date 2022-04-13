import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { colorPrincipal } from './color';

// Variables dinamicas
const getLinearGradient = (rot, color1, color2) => {
  return `background: linear-gradient(${rot}, ${color1}, ${color2});`
}

const Header = styled.header`
  ${getLinearGradient('50deg', 'green', 'orange')}
  text-align: center; 
  border-radius: 0.2em;
  color: #fff;
  padding: 0.3em;
  margin: 0.3em;
  font-size: 14px;

  h1 {
    color:blue;
  }
`

const Button = styled.button`
  padding: 0.6em 1.5em;
  background: ${ (props) => props.bg || 'black' };
  border-radius: 0.1em;
  color: #fff;
  border: 0;
  margin: 0.4em;
`

const ButtonSpecial = styled(Button)`
  color: gray;
  transition: all 300ms ease-out;

  &:hover {
    transform: scale(1.3);

  }
`

const Move = ({ className }) => {
  const [ mouseX, setMouseX ] = useState(0)

  const handleMove = (e) => {
    setMouseX(e.clientX)
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMove)

    return () => {
      window.removeEventListener('mousemove', handleMove)
    }
  }, [])
  return (
    <div className={className}>
      { mouseX }
    </div>
  )
}

const MoveStyled = styled(Move)`
  background: yellow;
  font-size: 30px;
  height: 200px;
  text-align: center;
`

const App = () => {
  return (
    <div>
      <Header>
        <h1> Prueba </h1>
      </Header>
      <Button>
        Un Boton
      </Button>

      <ButtonSpecial>
        Special
      </ButtonSpecial>

      <MoveStyled />
    </div>
  ) 
}

export default App