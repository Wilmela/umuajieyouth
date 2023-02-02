import { styles } from "../styles/styles";
import { excosData, members } from "../constants";

type ExcoCardProps = {
  src: string;
  name: string;
  position: string;
};
const ExcoCard = (props: ExcoCardProps) => {
  const { src, name, position } = props;
  return (
    <div className="rounded-md flex flex-col items-center justify-center bg-white p-4 shadow-lg group relative cursor-pointer hover:scale-x-105 duration-300 ease-in my-2 card h-[350px] xs:h-auto">
      <img src={src} alt="bg" className="w-[100%] h-[100%] object-cover" />

      <div className="w-[85%] bg-[rgba(0,0,0,0.8)] p-2 rounded-lg hidden group-hover:block cursor-pointer absolute bottom-5">
        <p className="text-white text-center font-Overpass">{name}</p>
        <p className="text-white text-center font-Anaheim">{position}</p>
      </div>
    </div>
  );
};
const Excos = () => {
  return (
    <section data-aos="fade-right" id="excos" className={styles.sectionSpacing}>
      <p className={`${styles.headingText} mb-8`}>Youth Excos and Members</p>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-4 cursor-pointer">
          {excosData.map((exco) => (
            <ExcoCard
              name={exco.name}
              src={exco.imgUrl}
              position={exco.position}
              key={exco.id}
            />
          ))}
        </div>

        <p className={`font-Mont text-2xl lg:text-3xl mb-4 text-gray-800 my-8`}>
          Other respected members include:
        </p>
        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 cursor-pointer mt-8">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-green-600 hover:bg-green-500 p-2 rounded-lg w-full md:w-content text-center"
            >
              <p className="text-white font-Overpass">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Excos;
