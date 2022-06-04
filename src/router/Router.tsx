// Modules
import { 
  BrowserRouter ,
  Routes,
  Route
} from 'react-router-dom';

// Screens
import Login from '../screens/Login';
import LoginWithGrid from '../screens/LoginWithGrid';
import ProductForm from '../screens/ProductForm';

// Simple router
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="*" element={<main>There is no page</main>}/>
        <Route path="/product-form" element={<ProductForm/>}/>
        <Route path="/login" element={<LoginWithGrid/>}/>
      </Routes>
    </BrowserRouter>
  )
}
