import { currentUser } from "@clerk/nextjs";
import bannerImage from "../../../assets/HeroBackground.jpeg";

const AccountBanner = async () => {
  const user = await currentUser();

  return (
    <div
      className="flex items-end justify-start bg-cover bg-center p-2 text-white"
      style={{
        backgroundImage: `url(${bannerImage.src})`,
        minHeight: "230px",
      }}
    >
      <p className="m-5 text-2xl">Welcome Back {user?.firstName}</p>
    </div>
  );
};

export default AccountBanner;
