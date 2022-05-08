import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiReactjsLine } from "react-icons/ri";
import {GiGamepad} from "react-icons/gi";
import { AiOutlineGithub } from "react-icons/ai";

const ServiceCard = ({ color, title, icon, subtitle,github }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl ">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1 ">
      <h3 className="mt-2 text-white text-lg ">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-11/12 ">
        {subtitle}
      </p>
      {github &&
        (<a href="https://github.com/abderox/CryptoFlipCards" class="text-pink-600 visited:text-purple-600 font-semibold pt-2" target="_blank" rel="noopener noreferrer">CryptoFlipCards</a>)}
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services ">
    <div className="flex mf:flex-row items-center justify-center w-full md:p-20 py-12 px-4 mt-4">
     

      <div className="flex-1 flex  justify-start items-center  flex-col">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Retro games"
          icon={<GiGamepad fontSize={30} className="text-white" />}
          subtitle="Vantage game. Enjoy playing  . I will build a better ones next time . Don't forget learning is a must firmly  
          "
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Learning React"
          icon={<RiReactjsLine fontSize={30} className="text-white" />}
          subtitle="The main goal of this web app , indeed is leaning React Js .. Games makes learning challenging and typical ..."
        />
        <ServiceCard
          color="bg-[#F84550]"
          github="true"
          title="Open source"
          icon={<AiOutlineGithub fontSize={30} className="text-white" />}
          subtitle="Share it with your friends , customize it your way ! My name is MOUZAFIR & Here is the link to the github repository : "
        />
      </div>
    </div>
  </div>
);

export default Services;
