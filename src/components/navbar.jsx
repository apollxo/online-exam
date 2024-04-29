import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-4 py-2 bg-white text-blue">
            
            <Link to="/" className="font-bold text-xl"><div>
                {/* Place your logo image or component here */}
                <img src='./images/logo.svg' alt="Logo" className="h-8 ml-[12px]" />
            </div></Link>

            <div className="flex items-center">
                <ul className="flex space-x-4 ml-4">
                <Link to="/home"><li className='border-b-[4px]  p-[12px] text-[22px] m-[5px] hover:border-blue-900 '>Home</li></Link>
                <Link to="/about"><li className='border-b-[4px]  p-[12px] text-[22px] m-[5px] hover:border-blue-900 '>About</li></Link>
                <Link to="/services"><li className='border-b-[4px]  p-[12px] text-[22px] m-[5px] hover:border-blue-900 '>Resources</li></Link>
                <Link to="/contact"><li className='border-b-[4px]  p-[12px] text-[22px] m-[5px] hover:border-blue-900 '>Contact</li></Link>
                <Link to="/contact"><li className='p-[12px] text-[22px] m-[5px] border-[1px] border-[#D4D2E3] rounded-[9px] hover:text-white hover:bg-green-700'>Login</li></Link>
                <Link to="/contact"><li className='p-[12px] text-[22px] m-[5px] bg-blue-800 text-white rounded-[9px]'>Get Started</li></Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
