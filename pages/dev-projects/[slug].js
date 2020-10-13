import Layout from '../../components/layout';
import { getAllProjectSlugs, getProjectData } from '../../lib/posts';
import Head from 'next/head';
import ReactMarkdown from "react-markdown";
import styles from './project.module.scss';
import { Carousel } from 'react-responsive-carousel';
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";

export default function Post({ postData }) {
  console.log(postData)
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <section className={styles.contentSection}>
        <Row className={styles.contentRow}>
          <h2>{ postData.title }</h2>
        </Row>
        <Row className={styles.contentRow}>
          <Col xs={'12'} md={'8'}>
            <ReactMarkdown source={postData.content} />
          </Col>
          <Col xs={'12'} md={'3'}>
            <img src={postData.thumbnail.url} />
          </Col>
        </Row>
        <Row>
          <Col className={styles.linkRow}>
            <a href={postData.link}
               className={styles.githubLink}
               rel={'nofollower noopener'}
               target={'_blank'}>
              View on Github
            </a>
          </Col>
        </Row>
      </section>
      {postData.gallery && postData.gallery.length > 0 ? (
        <section className={styles.gallery}>
          <h2>Screenshots</h2>
          <Carousel autoPlay={true} width={'50vh'}>
            {postData.gallery.map(image => (
              <div key={image.id}>
                <img src={image.formats ? image.formats.large.url : image.url} />
              </div>
            ))}
          </Carousel>
        </section>
      ) : null}
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = await getAllProjectSlugs()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getProjectData(params.slug)
  return {
    props: {
      postData
    }
  }
}
