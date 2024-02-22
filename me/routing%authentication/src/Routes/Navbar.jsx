import { Link } from "react-router-dom"

export const Navbar = () => {
    return(
        <div className = "navbar" style={{justifyContent:"center" , display: 'flex', gap: '20px'}}>
            <Link to={'./Login'}>Login</Link>
            <Link to={'./Home'}>Home</Link>
            <Link to={'./About'}>About</Link>
            <Link to={'./Contact'}>Contact</Link>
            <Link to={'./AllProduct'}>Products</Link>
        </div>
    )
}
