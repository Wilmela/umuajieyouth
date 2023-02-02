import { styles } from "../styles/styles";

import { eventData } from "../constants";

type EventsProps = {
  imgUrl: string;
  desc: string;
};

const EventCard = (props: EventsProps) => {
  const { imgUrl, desc } = props;

  return (
    <div data-aos="fade-left" id='info' className="flex flex-col rounded-md p-4 bg-white h-[350px]">
      <img
        src={imgUrl}
        alt="excos"
        className="w-[100%] h-[230px] object-contain"
      />
      <div className="text-center font-Anaheim text-gray-700 py-2">{desc}</div>
    </div>
  );
};

const Info = () => {
  return (
    <section id="info" className={`${styles.sectionSpacing} flex flex-col `}>
      <p className={styles.headingText}>Events Gallery</p>
      <p className={styles.subHeadingText}>For transparency, accessibility and accountability, critical events and decisions will be made public here.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {eventData.map((event) => (
          <EventCard key={event.desc} imgUrl={event.imgUrl} desc={event.desc} />
        ))}
      </div>
    </section>
  );
};

export default Info;
