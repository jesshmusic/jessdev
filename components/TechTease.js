import styles from "./Card.module.scss";
import ReactMarkdown from "react-markdown";
import CardComponent from "./CardComponent";

const TechTease = ( { title, description, logo }) => (
  <CardComponent title={title}
                 description={description}
                 image={logo}
                 className={'tech-card'}  />
);

export default TechTease;
