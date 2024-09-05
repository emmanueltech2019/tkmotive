import Image from "next/image";
import heroImg from './components/img/image.png'

export default function Home() {
  return (
    <div>
      <div className="z-50 fixed left-1/2 transform -translate-x-1/2 w-full inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative left-[-40px]  md:right-[10%] text-6xl md:text-7xl font-bold w-[10%] m-auto">
          <div className="absolute w-full text-center animate-slide-in-right-smooth text-stroke-[1px] text-stroke-[#ffffff96] text-transparent">
            COMING SOON!!
          </div>
          <div className="absolute w-full text-center z-10 text-white">
            COMING SOON!!
          </div>
          <div className="absolute w-full text-center animate-slide-in-left-smooth text-stroke-[1px] text-stroke-[#ffffff96] text-transparent">
            COMING SOON!!
          </div>
          <div className="absolute w-full text-center animate-slide-in-left-smooth text-stroke-[1px] text-stroke-[#ffffff96] text-transparent">
            COMING SOON!!
          </div>
        </div>
      </div>

      <section className="blur-sm">
        <div className="md:flex flex-row-reverse justify-between items-center overflow-hidden max-h-[100vh]">
          <div className="hero-img">
            <Image src={heroImg} alt="tkmotive hero" className="h-[500px] md:h-[100%] md:w-[740px] object-fit" />
          </div>

          <div className="hero-text p-4 mt-[50px] md:mt-[13rem] md:max-w-[85%] m-auto">
            <h1 className="font-[900] text-[#fff] text-[27.66px] md:text-[48px] leading-[32.85px] md:leading-[53.41px] w-[350px] md:w-[500px]">
              Chill, Hangout, Enjoy a Perfect Meal with Your Buddies
            </h1>
            <p className="font-[400] text-[12.86px] md:text-[17.61px] text-[#bbbbbb] leading-[15.48px] md:leading-[22px] mt-[20px] md:mt-[40px] w-[340px]">
              Enjoy these pre-made components and worry only about creating the best product ever.
            </p>

            <div className="hero-btn flex items-center gap-4 text-[#fff] p-4 mt-[20px] md:mt-[50px] ">
              <button className="text-[14px] font-light leading-[20.15px] bg-[#E09427] p-3 px-6 rounded-[24px]">Our Menu</button>
              <button className="text-[14px font-light leading-[20.15px] border border-[#fff] p-3 px-6 rounded-[24px]">Contact</button>
            </div>
          </div>


        </div>
      </section>
    </div>
  );
}
