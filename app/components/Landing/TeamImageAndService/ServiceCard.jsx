import landingStyles from "@/app/styles/LandingPage.module.css";

const ServiceCard = ({ service, cardRef }) => {
  return (
    <div
      ref={cardRef}
      className={landingStyles.s_desc}
    >
      <img
        src={service.icon}
        alt={service.alt}
        className={landingStyles.s_icon}
      />
      <div className={landingStyles.h_list_container}>
        <h3 className={landingStyles.t_heading}>{service.title}</h3>
        <ul className={landingStyles.s_sec_list}>
          {service.items.map((item, idx) => (
            <li 
              key={idx} 
              style={item == null ? { listStyleType: "unset" } : {}}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;