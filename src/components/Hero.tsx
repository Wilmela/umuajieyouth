
const Hero = () => {
  return (
    <section id='home' data-aos='fade-left' className="w-full min-h-[calc(100vh-70px)] flex flex-col items-center justify-center hero-bg">
      <div className="bg-[rgba(0,0,0,0.7)] rounded-md p-4 mx-4 md:mx-8 lg:mx-12 xl:mx-24 h-[250px] xl:h-[400px] flex flex-col justify-center items-center">
        <p className="text-white font-Mont text-3xl md:text-5xl xl:text-7xl text-center leading-10 xl:leading-[80px]">
          Umu-Ajie Community Youth Association
        </p>
        <p className="font-Overpass mt-4 md:mt-6 xl:mt-8 text-gray-300 md:text-xl">
          -In God We Trust-
        </p>
      </div>
    </section>
  );
};

export default Hero;
