import React from "react"
import "./Navbar.css"
import{
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom"
import Home from './Home'
import About from './About'
import Product from './Product'
import ProductItem from './ProductItem'

export default function Navbar(){
    return(
        <div>
            <Router>

            <nav className="nav">
                <ul>
                    <Link to="/"> <li>home</li> </Link>
                    <Link to="About"> <li>about</li> </Link>
                    <Link to="Product"> <li>product</li> </Link>
                </ul>
            </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="About" element={<About />} />
                    <Route path="Product" element={ <Product /> } />
                    <Route path="/Product/:id" element={<ProductItem />} />
                </Routes>
            </Router>

        </div>
    )
}