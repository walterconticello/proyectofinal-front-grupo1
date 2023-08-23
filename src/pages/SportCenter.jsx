import CardCenter from '../components/Cards/CardCenter'
import { Button } from 'react-bootstrap';

const SportCenter = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
  <CardCenter />
  <Button variant="primary" style={{ marginLeft: '10px' }}>
    Nuevo complejo
  </Button>
</div>
    </>
  )
}
export default SportCenter;
