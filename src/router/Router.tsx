// Modules
import { 
  BrowserRouter ,
  Routes,
  Route
} from 'react-router-dom';

// Screens
import Login from '../screens/Login';
import ProductForm from '../screens/ProductForm';

// Simple router
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="*" element={<main>There is no page</main>}/>
        <Route path="/product-form" element={<ProductForm/>}/>
      </Routes>
    </BrowserRouter>
  )
}
