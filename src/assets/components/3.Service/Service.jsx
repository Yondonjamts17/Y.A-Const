import "./Service.css";

const Service = () => {
  const services = [
    {
      title: "Design and Planning",
      description:
        "We offer a wide range of construction services to meet the needs of our clients.",
      image: "../../assets/1.jpg",
    },
    {
      title: "Structural Work",
      description:
        "We specialize in structural work, ensuring that all projects are built to last.",
    },
    {
      title: "Project Management",
      description:
        "Our project management team ensures that every project is completed on time and within budget.",
    },
  ];

  return (
    <section id="service" className="service">
      <div className="service_container">
        <h2 className="service_title">Our Services</h2>
        <div className="service_grid">
          {services.map((service, index) => (
            <div className="service_item" key={index}>
              <h3 className="service_name">{service.title}</h3>
              <p className="service_description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Service;
