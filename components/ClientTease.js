import CardComponent from "./CardComponent";

const TechTease = ( { name, subtitle, description, logo, siteLink }) => (
  <CardComponent title={name} description={description} image={logo} subtitle={subtitle} siteLink={siteLink} />
);

export default TechTease;
