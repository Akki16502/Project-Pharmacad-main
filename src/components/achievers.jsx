import React from "react";
import Image from "next/image";

// import MB from "../../public/manashviB_1.webp";
// import AH from "../../public/akashharia_1.webp";
// import HJ from "../../public/hiraljoshi_1.webp";
// import NK from "../../public/NiyatiK_1.webp";
// import PS from "../../public/prachiach_1.webp";
// import SS from "../../public/sakshishah_1.webp";
import achiever from "../../public/achiever.png";

const Achieve = () => {
  return (
    <div className="bg-white py-24 sm:py-20">
      <div className="mx-auto max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-1">
        <div className="container mx-auto max-w-screen-xl">
          <h1 className="text-4xl font-bold font-inter">Our Achievers</h1>
          <Image src={achiever} alt="achiever" className="mt-6 rounded-lg" />
        </div>

      </div>
    </div>
  );
};

export default Achieve;
