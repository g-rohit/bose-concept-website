import logo from '../../images/bose_logo_white.png';
import './header.css';

function Header() {
    return (
         <header>
           <nav>
               <a href="#" >
                   <div className='logoContainer'>
                       <img src={logo} alt="bose-logo" className="logo"/>
                   </div>
               </a>
             <ul className='navItems'>
               <li><a href="#">About</a></li>
               <li><a href="#">Products</a></li>
               <li><a href="#">Find a store</a></li>
               <li><a href="#">Contact</a></li>
             </ul>
           </nav>
         </header>
    );
}

export default Header;
