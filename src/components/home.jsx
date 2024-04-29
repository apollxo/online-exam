// import image1  from '../assets/image1.png'
// import image2 from '../assets/image2.svg'
// import image3 from '../assets/image3.svg'
// import image4 from '../assets/image4.svg'
// import image5 from '../assets/image5.svg'
// import image6 from '../assets/image6.svg'
// import image7 from '../assets/image7.svg'
// import image8 from '../assets/image8.svg'
// import image9 from '../assets/image9.svg'
// import image10 from '../assets/image10.svg'

import CountUp, { useCountUp } from 'react-countup';
function Home(){


    const SimpleHook = () => {
        useCountUp({ ref: 'counter', end: 1234567 });
        return <span id="counter" />;
      };

    function msg(){
        alert('Under construction, Coming soon!!!')
    }
    return (
        <>
        <main className="">
            
            {/* part 1 */}

            <div className="flex mt-10 h-screen">
            
                <div className="w-1/2 grid justify-center grid-rows-2 h-[210px  ] pt-15 ">
                    <h1 className="text-[70px] w-[479px]  text-wrap font-bold font-['Poppins']">Take Online Exam.</h1>
                
                    <div className="">
                        <p className="text-black text-[35px] text-start font-['Poppins'] font-medium ">Number of active users right now</p>
                        <div className="pt-3 text-center font-['Poppins'] font-[700] text-blue-700 text-[50px]">
                            <p><CountUp
                                start={0}
                                end={200}
                                duration={6}
                            />
                            +</p>
                        </div>
                    </div>
                </div> 
                <div className="w-1/2 flex justify-center">
                    <img src='./images/image1.png' className='w-[370px] h-[370px] shadow-2xl' alt="" />
                </div>
            </div>


            {/* part2 */}

            <div className="h-[620px] bg-blue-700 flex  flex-wrap max-w-full">
                <img src='./images/image2.svg' alt="" className='h-[390px] w-[416px] mt-[355px]' />
                <img src='./images/image3.svg' alt="" className='h-[370px] w-[406px] mt-[180px]'/>
                <img src='./images/image4.svg' alt="" className='h-[390px] w-[418px] mt-[95px]'/>
            </div>


            {/* part3 */}


            <div className="bg-white flex flex-col ">

                <div className='flex justify-around w-full h-full '>
                    <h1 className='inline-block max-w-[640px] font-bold text-[66px] text-[#1D4645] mt-[121px] '>Explore Our Exam</h1>
                    <a href={'#'} onClick={msg}>
                        <button className='uppercase h-[45px] mt-[145px] text-[#1D4645] text-[14px] border-[3px] border-[#1D4645] border-solid rounded-[12px] m-2 font-700 hover:bg-[#1D4645] hover:text-white w-[120px]'>
                        Explore all
                        </button>
                    </a>
                </div>

                <div className="mt-[110px] flex gap-5 flex-wrap justify-center  ">

                    <a href="">
                        <div className="w-[450px] h-[375px] bg-[#edc1c1] flex-col justify-evenly ml-[68px] pt-[30px]  pl-[20px] rounded-[7px] shadow-lg shadow-[#36366d]">
                            <img src='/images/image5.svg' alt="" className='h-[120px] w-[102px] m-[10px]'/>
                            <h1 className='text-[24px] text-[#1D4645] font-bold m-[10px] pt-[30px]'>Math</h1>
                            <p className="text-[#33333380] text-[16px] font-['Commissioner'] m-[10px]">Sky was cloudless and of a deep dark blue spectacle before us was indeed </p>
                        </div>
                    </a>


                    <a href="">
                        <div className="w-[450px] h-[275px] bg-[#edc1c1] flex-col justify-evenly ml-[68px] pt-[30px]  pl-[20px] rounded-[7px] shadow-lg shadow-[#5ec479] ">
                            <img src='./images/image6.svg' alt="" className='h-[120px] w-[102px] m-[10px]'/>
                            <h1 className='text-[24px] text-[#1D4645] font-bold m-[10px]'>English</h1>
                            <p className="text-[#33333380] text-[16px] font-['Commissioner'] m-[10px]">Even the all-powerful Pointing has no control about the blind texts.</p>
                        </div>
                    </a>


                    <a href="">
                        <div className="w-[450px] h-[275px] bg-[#edc1c1] flex-col justify-evenly ml-[68px] pt-[30px]  pl-[20px] rounded-[7px] shadow-lg shadow-[#0bafab] ">
                            <img src='./images/image7.svg' alt="" className='h-[120px] w-[102px] m-[10px]'/>
                            <h1 className='text-[24px] text-[#1D4645] font-bold m-[10px]'>Physics</h1>
                            <p className="text-[#33333380] text-[16px] font-['Commissioner'] m-[10px]">However a small line of blind text by the name.</p>
                        </div>
                    </a>


                    <a href={'#'}>
                        <div className="w-[450px] h-[375px] bg-[#ffffff] flex-col justify-evenly ml-[68px] pt-[30px]  pl-[20px] rounded-[7px] shadow-lg shadow-[#505555]">
                            <img src='./images/image8.svg' alt="" className='h-[120px] w-[102px] m-[10px]'/>
                            <h1 className='text-[24px] text-[#1D4645] font-bold m-[10px]'>Basic Knowledge</h1>
                            <p className="text-[#33333380] text-[16px] font-['Commissioner'] m-[10px]">Text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                        </div>
                    </a>
                </div>
            </div>

            {/* part4 */}

            <div className=" flex flex-row p-[12px] bg-[#FAFAFC] mt-[80px]">
                <div className='flex flex-col w-1/2 m-3'>
                    <h1 className="text-[48px] text-black text-center font-['Montserrat'] my-[20px]">You're in good company</h1>
                    <p className="text-[36px] text-center font-['Montserrat'] mb-[22px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    <div id="image" className='grid grid-cols-3 gap-0 '>
                        {[...Array(6)].map((_, index) => (
                            <img key={index} src='./images/image9.svg' alt="" className='w-[150px] h-[76px] m-0 p-0' />
                        ))} 
                    </div>
                </div>

                <div className='flex flex-col w-1/2 mx-[12px] border-[1.5px] border-black border-solid'>
                    <img src='./images/image10.svg' alt="" className='max-w-full '/>
                    <div className='p-[22px]'>
                        <p className="text-[44px]  font-['Montserrat'] font-medium text-center pt-3 ">Sed ut perspiciatis unde omnis</p>

                        <p className="text-[18px] font-['Montserrat'] text-center m-[8px] text-wrap px-[10px]">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                        </p>
                    </div>
                </div>
            </div>
            



        </main>
        </>
    )
}

export default Home;




