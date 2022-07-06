import video from "../assets/video/homeVideo.mp4";
import logo from "../assets/images/logo.png";

import instagram from "../assets/images/Instagram.png";
import twitter from "../assets/images/Twitter.png";
import discord from "../assets/images/Discord.png";

const Home = () => {
  return (
    <>
      <section className="w-full h-screen flex">
        <div className="w-[65%] laptop:w-[60%] h-full breakPoint:hidden">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className="w-[35%] laptop:w-[40%] breakPoint:w-full h-full">
          <div className="homeContentContainer p-[3rem] tablet:p-[1.5rem] flex flex-col justify-between items-center">
            <div className="self-start">
              <img
                src={logo}
                alt=""
                className="h-[3rem] laptop:h-[2rem] tablet:h-[1.5rem] w-auto"
              />
            </div>
            <div className="text-white flex flex-col items-center uppercase gap-12">
              <div>
                <h2 className="font-matterR laptop:text-5xl tablet:text-3xl">
                  Maximalist
                </h2>
                <h2 className="font-matterB laptop:text-5xl tablet:text-3xl relative top-[-10px] laptop:top-[-5px]">
                  Available
                </h2>
              </div>
              <p className="font-matterR text-3xl laptop:text-[1.25rem] tablet:text-[1rem]">
                0000<span className="font-matterB">/9976</span>
              </p>
              <div className="flex items-center gap-2 font-matterR text-lg">
                <button className="cursor-pointer">+</button>
                000X
                <button className="cursor-pointer">-</button>
              </div>
              <button className="purchaseBtn flex flex-col items-center font-matterB text-3xl laptop:text-[1.25rem] tablet:text-[1rem] leading-[1.05] uppercase bg-[#ffc400] py-2 px-3 text-black">
                Purchase Now <span className="font-matterR">On Opensea</span>
              </button>
            </div>
            <div className="w-full flex justify-between items-center">
              <a href="" className="font-matterR text-white uppercase text-xs">
                Maximalist.io
              </a>
              <div className="flex items-center gap-3">
                <a href="">
                  <img src={instagram} alt="" className="" />
                </a>
                <a href="">
                  <img src={twitter} alt="" className="" />
                </a>
                <a href="">
                  <img src={discord} alt="" className="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
