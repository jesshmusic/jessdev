import CardComponent from "./CardComponent";
import { excerpt } from "../lib/utilities";

const ProjectTease = ( { title, excerpt, thumbnail, slug }) => {
  return (
    <CardComponent title={ title }
                   isInternalLink
                   description={excerpt}
                   image={ thumbnail }
                   siteLink={ `/dev-projects/${slug}` }
                   className={ 'client-card' }/>
  );
}

export default ProjectTease;
