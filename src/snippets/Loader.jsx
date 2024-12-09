import React from "react";
import { Oval } from "react-loader-spinner";

function Loader() {
  return (
    <div className="flex items-center justify-center fixed top-0 left-0 w-full h-full bg-black opacity-50">
      <Oval
        visible={true}
        height="70"
        width="70"
        color="#422659"
        secondaryColor="#422659"
        ariaLabel="oval-loading"
        strokeWidth={3}
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
