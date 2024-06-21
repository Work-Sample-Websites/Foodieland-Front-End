function AboutUsInfo() {
  return (
    <section>
      <div className="flex flex-wrap gap-10 my-20 font-inter">
        <div className="basis-[100%] lg:basis-[49%] flex flex-col justify-between">
          <div>
            <h1 className="font-semibold text-3xl sm:text-4xl xl:text-5xl text-center lg:text-left">
              23 Years Of Experience In Cooking Services
            </h1>
          </div>
          <div className="">
            <p className="text-secondary my-12 text-sm md:text-base xl:text-lg text-center lg:text-justify">
              Sed ut perspiciatis unde omnis natus error lutatem accusantium
              doloremque laudantium totam rem apam eaquepsa quae abillo
              inventore veritatis quasi arctecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsamya voluptatem quia voluptas sit
              aspernatur aut odifugi sed quia consequuntur magni dolores eos qui
              ratioluptatem sequi nesciunt. Neque porro quisquam est qui dolorem
              ipsum quia dolor sit amet consectetur
            </p>
          </div>
          <div className="text-center lg:text-left">
            <button className="mx-auto bg-lameBlue font-semibold px-6 py-5 md:px-14 md:py-6 rounded-2xl cursor-pointer hover:bg-darkBlue transition-all cursor-pointer">
              DISCOVER MORE
            </button>
          </div>
        </div>
        <div className="basis[100%] lg:basis-[46%]">
          <img
            src="./images/our-experience.jpg"
            alt="experience-img"
            className="rounded-xl object-cover h-full"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUsInfo;
