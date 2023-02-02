import { styles } from "../styles/styles";
import { aboutImage } from "../constants";

type AboutCardProps = {
  src: string;
  caption: string;
};

const AboutCard = (props: AboutCardProps) => {
  const { src, caption } = props;
  return (
    <div
      data-aos="fade-up"
      className="rounded-md overflow-hidden hidden md:flex flex-col items-center bg-white p-4 shadow-lg group relative cursor-pointer hover:scale-105 hover:translate-x-2 duration-300 ease-in h-[60%]"
    >
      <img src={src} alt="bg" />

      <div className="w-[90%] bg-[rgba(0,0,0,0.8)] p-4 rounded-lg hidden group-hover:block cursor-pointer absolute bottom-5">
        <p className="text-white text-center">{caption}</p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className={`${styles.sectionSpacing} space-x-6 w-full flex justify-between items-start`}
    >
      {/* About details */}
      <div className="md:w-[60%] flex flex-col items-center justify-center relative leading-[35px] text-lg">
        <p className={`${styles.headingText} mb-8`}>
          About Umu-Ajie Community Youth Association:
        </p>
        <p className={styles.descriptionText}>
          Umu-Ajie Community Youth Association is a non-profit organization
          founded in 2015 with the aim of promoting the welfare of young people
          in the community. The association is dedicated to empowering youth
          through various initiatives and programs aimed at improving their
          social, economic and educational status. <br />
          <br />
          One of the key objectives of the organization is to preserve the
          legacy of past generations and to groom the next generation of young
          people to be respectful, resourceful and knowledgeable about their
          community. The association believes that by fostering these values and
          skills in young people, they can contribute positively to the
          development of their community and ensure a bright future for
          generations to come. <br />
          <br />
          On December 10, 2022, the organization held her first democratic
          election and elected her first set of executives to lead the
          association. While the organization's first Omoku Youth Federation
          Executive, Comr. Oduah Lucky was elected into office on the January 14
          2023. These leaders are committed to furthering the association&apos;s
          goals and ensuring that its programs have a positive impact on the
          lives of young people in the community. The organization strives to
          create a supportive environment for youth, where they can access
          resources, network with peers and engage in meaningful activities. It
          also aims to advocate for the rights of young people and promote their
          participation in decision-making processes that affect their lives.{" "}
          <br />
          <br />
          If you are interested in learning more or supporting the community,
          please visit our website and connect with us through our social media
          platforms. We look forward to working with you to make a positive
          difference in the lives of young people in our community and to keep
          alive the legacy of our ancestors.
        </p>
      </div>

      {/* About cards */}
      <div className="w-[40%] flex flex-col gap-6">
        {aboutImage.map((data) => (
          <AboutCard key={data.id} src={data.imgUrl} caption={data.caption} />
        ))}
      </div>
    </section>
  );
};

export default About;
