import Identicon from "react-identicons";
import { setGlobalState, useGlobalState, truncate } from "../store";

const Hero = () => {
  const [connectedAccount] = useGlobalState("connectedAccount");
  const [nfts] = useGlobalState("nfts");
  const onCreatedNFT = () => {
    setGlobalState("modal", "scale-100");
  };

  return (
    <div
      className="flex flex-col md:flex-row w-4/5 justify-between 
      items-center mx-auto py-10 pt-20"
    >
      <div className="md:w-3/6 w-full">
        <div>
          <h1 className="text-dark text-5xl font-bold">
            Own a piece of the digital Ownership of Physical property with our
            NFT property marketplace.
          </h1>
          <p className="text-dark-600 font-semibold text-sm mt-3">
            Find your dream home, effortlessly.
          </p>
        </div>

        <div className="flex flex-row mt-5">
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={onCreatedNFT}
          >
            Sell Property
          </button>
        </div>

        <div className="w-3/4 flex justify-between items-center mt-5">
          <div>
            <p className="text-dark font-bold">100+</p>
            <small className="text-dark-300">Property</small>
          </div>
          <div>
            <p className="text-dark font-bold">{nfts.length}</p>
            <small className="text-dark-300">Total available for sale</small>
          </div>
          <div>
            <p className="text-dark font-bold">Ahmedabad,IN</p>
            <small className="text-dark-300">location</small>
          </div>
        </div>
      </div>

      <div
        className="shadow-xl shadow-black md:w-2/5 w-full 
      mt-10 md:mt-0 rounded-md overflow-hidden bg-gray-800"
      >
        <img
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1656508617296/gy9ccrCIu.gif?auto=format,compress&gif-q=60&format=webm"
          alt="NFT Art"
          className="h-60 w-full object-cover"
        />
        {/* https://64.media.tumblr.com/475905347da190928cb15d86ac3f5562/cefb9777462aef5c-ab/s500x750/a6dab76d40f2522a7a202e29fcd3ff986e8b6009.gifv */}
        <div className="flex justify-start items-center p-3">
          <Identicon
            string={connectedAccount ? connectedAccount : "Connect Your Wallet"}
            size={50}
            className="h-10 w-10 object-contain rounded-full mr-3"
          />
          <div>
            <p className="text-white font-semibold">
              {connectedAccount
                ? truncate(connectedAccount, 4, 4, 11)
                : "Connect Your Wallet"}
            </p>
            <small className="text-pink-800 font-bold">@you</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
