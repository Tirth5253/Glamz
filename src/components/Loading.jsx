import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Lclass="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"

  const Loading = () => {                                                   //this is the Loading skeleton component that 
    return (
      <>
        <div className="col-12 py-5 text-center">
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