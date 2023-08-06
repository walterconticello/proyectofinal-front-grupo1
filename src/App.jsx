import { useState } from 'react'
import './App.css'
import ModalCancha from './components/ModalCanchas'
import ModalComplex from './components/ModalComplex'
import Button from 'react-bootstrap/Button';

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  ModalCancha()

  return (
    <>
      <Button onHide={handleClose}>
    ModalCancha
      </Button>
    </>
  )
}

export default App
