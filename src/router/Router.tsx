// Modules
import { 
  BrowserRouter ,
  Routes,
  Route
} from 'react-router-dom';

// Screens
import Home from '../screens/Home';
import ProductForm from '../screens/ProductForm';
import LoginWithGrid from '../screens/LoginWithGrid';

// Components 
import PrivateRoutes from '../router/PrivateRoutes'
import PublicRoutes from './PublicRoutes';

// Simple router
export default function Router() {

  const isLoggedIn = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/login"
          element={
            <PublicRoutes isLoggedIn={isLoggedIn}>
              <LoginWithGrid/>
            </PublicRoutes> 
          }
        />
        <Route 
          path="/product-form" 
          element={
            <PrivateRoutes isLoggedIn={isLoggedIn}>
              <ProductForm/>
            </PrivateRoutes> 
          }
        />
        <Route 
          path="/home" 
          element={
            <PrivateRoutes isLoggedIn={isLoggedIn}>
              <Home/>
            </PrivateRoutes> 
          }
        />
        <Route path="*" element={<main>There is no page</main>}/>
      </Routes>
    </BrowserRouter>
  )
}
