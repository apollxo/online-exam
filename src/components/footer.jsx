import { Link } from 'react-router-dom';
// import facebook  from '../assets/logos/facebook.svg'
// import twitter  from '../assets/logos/twitter.svg'
// import instagram  from '../assets/logos/instagram.svg'
function Footer(){

    const sections = [
        ["Mobile App", "Features", "Live Share", "Video record"],
        ["Community", "Featured artists", "The Portal", "Live events"],
        ["Company",  "About us", "Contact us", "History"],
    ];

    const isBold = (item) => {
        return ["Mobile App", "Community", "Company"].includes(item);
    };
    return (
        <>
        <footer className='mt-10 bg-white '>

            <div className='flex flex-row pb-3 mt-[120px]'>
                <div className="w-5/6  flex flex-row justify-evenly gap-10 ">
                {sections.map((section, index) => (
                    <div key={index}>
                        <ul className="">
                            {section.map((item, itemIndex) => (
                                
                                <li key={itemIndex} className={isBold(item) ? "font-bold pb-[10px] font-['Montserrat'] text-[22px]" : "font-['Montserrat'] text-[19px]"} >
                                    <Link to={'/'}>{item}</Link>
                                </li> 
                            ))}
                        </ul>
                    </div>

                
                ))}
                </div>

                <div className='w-1/6 flex flex-col justify-center gap-[2px] '>
                    <a href={'/'}>
                        <button className='text-white bg-[#4A3AFF] rounded-[4px] w-[130px] h-[40px]'>Register</button>
                    </a>
                    
                    <a href={'/'}>
                        <button className='border-[2px] border-solid border-blue-500 rounded-[4px] w-[130px] h-[40px] hover:text-white hover:bg-green-700'>Login</button>
                    </a>
                    
                    <a href={'/'}>
                        <button className='border-[2px] border-solid border-blue-500 rounded-[4px] uppercase w-[130px] h-[40px]'>admin</button>
                    </a>
                </div>
                
            </div>

            <hr className='border-[1px] border-solid border-[#14122c80] '></hr>
            <div className="flex justify-start px-8 pt-10">
                <p className="font-['Montserrat'] text-[15px] w-1/2 ml-[130px]">© Photo, Inc. 2023. We love our users!</p>
                <div className='w-1/2 flex flex-row justify-end gap-[4px]'>
                    <p className="font-['Montserrat'] text-center text-[17px] text-black mt-2 mr-1">Follow us:</p>
                    <a href={'#'}><img src='./images/logos/facebook.svg' alt="" /></a>
                    <a href={'#'}><img src='./images/logos/twitter.svg' alt="" /></a>
                    <a href={'#'}><img src='./images/logos/instagram.svg' alt="" /></a>
                </div>
            </div>
        </footer>
        </>
    )
}


export default Footer;