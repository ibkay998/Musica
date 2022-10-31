
import Image from "next/image";

const Loader = ({ title }) => (
  <div className="w-full flex justify-center items-center flex-col px-4 pt-12">
    {/* <Image className="object-contain" src={loader} alt="loader" width={32} height={32} /> */}
    <h1 className="font-bold text-2xl text-white mt-2">{title || "Loading"}</h1>
  </div>
);

export default Loader;