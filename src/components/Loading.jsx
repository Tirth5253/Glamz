import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Lclass = "md:w-1/3 sm:w-1/2 xs:w-4/5 w-full mb-4"; 

const Loading = () => {
  return (
    <>
      <div className="w-full py-5 text-center">
        <Skeleton height={40} width={560} />
      </div>
      <div className={Lclass}>
        <Skeleton height={592} />
      </div>
      <div className={Lclass}>
        <Skeleton height={592} />
      </div>
      <div className={Lclass}>
        <Skeleton height={592} />
      </div>
      <div className={Lclass}>
        <Skeleton height={592} />
      </div>
      <div className={Lclass}>
        <Skeleton height={592} />
      </div>
      <div className={Lclass}>
        <Skeleton height={592} />
      </div>
    </>
  );
};

export default Loading;
