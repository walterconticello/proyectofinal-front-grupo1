import { Route, Route as Rutas} from 'react-router-dom';
import AboutUs from '../components/AboutUs/AboutUs';

const Routes = () => {
    return (
        <Rutas>
            <Route path="/about-us" element ={<AboutUs/>} />
        </Rutas>
    );
    }