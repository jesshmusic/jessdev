import CardComponent from "./CardComponent";

const ClientTease = ( { name, subtitle, description, logo, siteLink }) => (
  <CardComponent title={name}
                 description={description}
                 image={logo}
                 subtitle={subtitle}
                 siteLink={siteLink}
                 className={'client-card'} />
);

export default ClientTease;
