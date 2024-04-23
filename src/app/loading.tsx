import GoodChangeLoading from "../assets/GoodChangeLoading.png";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Image
        src={GoodChangeLoading.src}
        width={1000}
        height={1000}
        alt="GoodChange Loading"
      />
    </div>
  );
};
export default Loading;
