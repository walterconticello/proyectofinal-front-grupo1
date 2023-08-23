import CardField from '../components/Cards/CardFields'
import { Button } from 'react-bootstrap';

const Fields= () => {
  return (
    <>
    <div className='ContainerCard container-fluid'>
     <Button variant="primary">
        Nuevo complejo
      </Button>
        <CardField/>
        </div>
    </>
  )
}
export default Fields;