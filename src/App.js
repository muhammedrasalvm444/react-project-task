import "./App.css";
import BannerImage from "./images/banner.png";
import CardImage1 from "./images/card_image1.png";
import CardImage2 from "./images/card_image2.png";
import CardImage3 from "./images/card_image3.png";

function App() {
  const CardImages = [
    {
      image: CardImage1,
      id: 1,
      text: "Explore large, destructible environments where no two games are ever the same",
    },
    {
      image: CardImage2,
      id: 2,
      text: "Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale",
    },
    {
      image: CardImage3,
      id: 3,
      text: "Discover even more ways to play across thousands of creator-made game genres",
    },
  ];
  // card images array
  const ContentArray = [
    {
      header: "5M",
      id: 1,
      text: "Daily User Engagements ",
    },
    {
      header: "$500K",
      id: 2,
      text: "Revenue Surge for an Platform",
    },
    {
      header: "10X",
      id: 3,
      text: "ROAS on all our marketing campaigns",
    },
  ];
  //content listing array
  return (
    <div className=" bg-black h-full flex flex-col items-center md:p-16 p-8 gap-10">
      {/* header section */}
      <div className="">
        <h1 className="text-white tracking-wide leading-10 font-extralight text-center  md:text-4xl text-2xl  ">
          Epic Games : An American video game and software developer and
          publisher based in Cary, North Carolina.
        </h1>
      </div>
      {/* Banner image section */}
      <div className=" w-full">
        <img src={BannerImage} className=" w-full h-500" />
      </div>
      <p className="text-white text-center text-sm  leading-7   font-poppins max-w-5xl">
        Create, play, and battle with friends for free in Fortnite. Be the last
        player standing in Battle Royale and Zero Build, experience a concert or
        live event, or discover over a million creator made games, including
        racing, parkour, zombie survival, and more. Each Fortnite island has an
        individual age rating so you can find the one that's right for you and
        your friends. Find it all in Fortnite ... Drop In.
      </p>
      <div>
        <button className="bg-white text-black px-20 py-2 text-md">
          Visit Website
        </button>
      </div>

      <div className="mx-4 md:mx-10 lg:mx-20">
        {/* card images lisiting */}
        <div className="grid md:grid-cols-3 gap-6 my-10 grid-cols-1">
          {CardImages?.map((item) => {
            return (
              <div
                className="flex flex-col items-center gap-4 text-center"
                key={`image${item?.id}`}
              >
                <img
                  src={item?.image}
                  alt="Image"
                  className="w-full h-auto max-w-full"
                />
                <p className="text-white w-full px-4 leading-6">{item?.text}</p>
              </div>
            );
          })}
        </div>
        {/* contribution section footer */}
        <div className="text-white text-center my-10">
          <h1 className="tracking-wide leading-10 font-extralight text-3xl md:text-4xl lg:text-5xl">
            Our Contribution
          </h1>
          <p className="text-sm md:text-base leading-7 font-poppins max-w-3xl my-5 mx-auto">
            Our core offering extends beyond mere profit generation; we
            emphasize the growth and active involvement of our user community.
            Collaborating with us represents an investment, rather than a mere
            expenditure. Our dedication to providing distinctive digital
            interactions guarantees unparalleled benefits for our clientele.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ContentArray?.map((item) => {
            return (
              <div
                className="flex items-center justify-center"
                key={`content${item?.id}`}
              >
                <div className="w-full md:w-72 text-center">
                  <h1 className="text-white text-4xl md:text-5xl">
                    {item.header}
                  </h1>
                  <p className="text-white mx-4 my-2">{item?.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="my-10 md:my-20 flex flex-col items-center">
          <h1 className="text-white tracking-wide leading-10 font-extralight text-3xl md:text-4xl lg:text-5xl text-center">
            Interested in delving deeper into the project?
          </h1>
          <p className="text-white text-sm md:text-base leading-7 font-poppins max-w-2xl my-5 md:my-10 mx-4 md:mx-auto text-center">
            If you'd like to explore further details about our initiatives or
            any of our affiliated brands, don't hesitate to connect. You can
            reach out to us via email at hello@abc.com or give us a call at +91
            480 20802730.{" "}
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 my-5 md:my-10 justify-center items-center ">
            <button className="bg-black text-white px-6 md:px-12 py-2 md:py-3 text-md md:text-lg border-white border">
              Ring us on skype
            </button>
            <button className="bg-white text-black px-6 md:px-12 py-2 md:py-3 text-md md:text-lg border-black border">
              Ring us on skype
            </button>
          </div>
        </div>
        <p className="text-center text-white text-xs">
          © 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default App;
