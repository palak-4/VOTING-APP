import Footer from './components/Footer'
import Navbar from './components/Navbar'
import background from "./votingbg.png";
import Testimonial from './components/Testimonial';
function App() {
  
  return (
    <>
    <Navbar/>
    {/* Home Page */}
    <div
        className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-16 py-10 sm:py-12 lg:py-16 px-8 sm:px-12 md:px-16 lg:px-20 bg-white h-[450px]"
        style={{backgroundImage: `url(${background})`,backgroundRepeat: "no-repeat" , backgroundSize: "contain" , backgroundPositionX:"right"}}>
        <div className="flex flex-col gap-6 ">
            <div className=" text-2xl md:text-3xl lg:text-[40px] font-bold ps-7 font-serif text-[#2E4057]">Revolutionizing the Way You Vote.</div>
            <div className="text-sm sm:text-base md:text-lg lg:text-xl text-center px-14 ">
              <p className='w-[600px] justify-normal gap-3'>Welcome to Cube, where we transform voting for trusts and societies with our secure, transparent, and user-friendly electronic voting platform. Our mission is to empower your organization to conduct democratic processes with confidence and ease. With cutting-edge technology and rigorous security measures, we ensure every vote is counted accurately, fostering trust and transparency. Join us in shaping the future of voting for trusts and societies.</p>
              <h1 className='pt-4 text-md font-bold text-[#2E4057] font-mono text-center italic w-[600px] gap-2'>Thank you for choosing Cube – where every voice is heard, and every vote matters.</h1>
              
            </div>
        </div>
        {/* <div className="flex items-center justify-center text-center gap-12 sm:gap-20">
            <button type="button"
                className="bg-gray-600 hover:bg-gray-400 hover:shadow-xl hover:-mt-1 font-semibold text-xl py-4 px-6 rounded-2xl text-white">Alternative</button>
            <button type="button"
                className="bg-gray-600 hover:bg-gray-400 hover:shadow-xl hover:-mt-1 font-semibold text-xl py-4 px-6 rounded-2xl text-white">Alternative</button>
        </div> */}
    </div>

     {/* second section  */}
    <div class="flex flex-col bg-[#2E4057] p-16 items-center justify-center gap-14">
        <h1 class="text-white text-2xl md:text-4xl font-bold">Our Voting Services</h1>

        <div class="w-full grid gap-8 lg:gap-10 md:grid-cols-3 items-start">

            <div class="text-white flex flex-col items-center justify-center gap-5">
                <img src="https://static.thenounproject.com/png/7236-200.png"
                    alt="Online Elections" class="rounded-full w-20 h-20 items-center invert"/>
                <h1 class="font-semibold text-2xl text-center underline underline-offset-4">Online Elections</h1>
                <p class="max-w-80 md:max-w-none text-center justify-normal">Our e-voting platform provides secure and efficient online elections, allowing voters to cast their ballots from anywhere while ensuring vote integrity and confidentiality through advanced encryption and authentication.</p>
            </div>
            <div class="text-white flex flex-col items-center justify-center gap-5 ">
                <img src="https://static.thenounproject.com/png/103882-200.png "
                    alt="Online Polls" class="rounded-full w-20 h-20 items-center invert"/>
                <h1 class="font-semibold text-2xl text-center underline underline-offset-4">Online Polls</h1>
                <p class="max-w-80 md:max-w-none text-center justify-normal">Engage your audience with our customizable online polls, designed for easy creation, distribution, and analysis. Gather quick, actionable feedback and receive instant, valuable insights.</p>
            </div>
            <div class="text-white flex flex-col items-center justify-center gap-5">
                <img src="https://getdrawings.com/free-icon-bw/vote-icon-4.png"
                    alt="Automated Ballot Counts" class="rounded-xl w-20 h-20 items-center invert"/>
                <h1 class="font-semibold text-2xl text-center underline underline-offset-4 justify-normal">Automated Ballot Counts</h1>
                <p class="max-w-80 md:max-w-none text-center">Our automated ballot counting service streamlines vote tallying, minimizing human error and accelerating result announcements while ensuring accurate and fair vote recording.</p>
            </div>

        </div>
    </div>

    {/* Section 3  */}
    {/* <div class="flex flex-col bg-slate-300 text-[#3D486F] py-16 px-28 items-center justify-center gap-20">
        <h1 class="text-3xl font-bold text-center underline underline-offset-8">What Can You Do With Us</h1>
        <div class="w-full grid gap-8 lg:gap-10 md:grid-cols-2">

            <div class="text-[#3D486F] flex flex-col items-center justify-center gap-5">
                <img src="https://www.skymetweather.com/themes/skymet/images/gallery/toplists/10-Stunning-Images-of-Clouds/1.jpg"
                    alt="Online Elections" class="rounded-full w-20 h-20 items-center"/>
                <h1 class="font-semibold text-2xl text-center">Online Elections</h1>
                <p class="max-w-80 md:max-w-none text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, quas! Incidunt facilis, aperiam ex quibusdam consectetur laborum ipsam et accusamus! Lorem
                    ipsum, dolor sit amet consectetur adipisicing elit. Eum, aliquid?</p>
            </div>

            <div class="text-[#3D486F] flex flex-col items-center justify-center gap-5">
                <img src="https://www.skymetweather.com/themes/skymet/images/gallery/toplists/10-Stunning-Images-of-Clouds/1.jpg"
                    alt="Online Elections" class="rounded-full w-20 h-20 items-center"/>
                <h1 class="font-semibold text-2xl text-center">Online Elections</h1>
                <p class="max-w-80 md:max-w-none text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, quas! Incidunt facilis, aperiam ex quibusdam consectetur laborum ipsam et accusamus! Lorem
                    ipsum, dolor sit amet consectetur adipisicing elit. Eum, aliquid?</p>
            </div>

            <div class="text-[#3D486F] flex flex-col items-center justify-center gap-5">
                <img src="https://www.skymetweather.com/themes/skymet/images/gallery/toplists/10-Stunning-Images-of-Clouds/1.jpg"
                    alt="Online Elections" class="rounded-full w-20 h-20 items-center"/>
                <h1 class="font-semibold text-2xl text-center">Online Elections</h1>
                <p class="max-w-80 md:max-w-none text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, quas! Incidunt facilis, aperiam ex quibusdam consectetur laborum ipsam et accusamus! Lorem
                    ipsum, dolor sit amet consectetur adipisicing elit. Eum, aliquid?</p>
            </div>

            <div class="text-[#3D486F] flex flex-col items-center justify-center gap-5">
                <img src="https://www.skymetweather.com/themes/skymet/images/gallery/toplists/10-Stunning-Images-of-Clouds/1.jpg"
                    alt="Online Elections" class="rounded-full w-20 h-20 items-center"/>
                <h1 class="font-semibold text-2xl text-center">Online Elections</h1>
                <p class="max-w-80 md:max-w-none text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, quas! Incidunt facilis, aperiam ex quibusdam consectetur laborum ipsam et accusamus! Lorem
                    ipsum, dolor sit amet consectetur adipisicing elit. Eum, aliquid?</p>
            </div>

        </div>
    </div> */}

    <Testimonial/>
    <Footer/>
    </>
  )
}

export default App
