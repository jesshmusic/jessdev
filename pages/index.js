import Head from 'next/head'
import { useEffect } from "react";
import Layout from '../components/layout'
import styles from '../styles/utils.module.scss'
import { getHomeData } from "../lib/posts";
import ReactMarkdown from "react-markdown";
import ContactForm from "../components/Contact";
import ClientTease from "../components/ClientTease";
import TechTease from "../components/TechTease";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const distributeByPosition = (vars) => {
  var ease = vars.ease,
    from = vars.from || 0,
    base = vars.base || 0,
    axis = vars.axis,
    ratio = {center:0.5, end:1}[from] || 0,
    distances;
  return function(i, target, a) {
    var l = a.length,
      originX, originY, x, y, d, j, minX, maxX, minY, maxY, positions;
    if (!distances) {
      distances = [];
      minX = minY = Infinity;
      maxX = maxY = -minX;
      positions = [];
      for (j = 0; j < l; j++) {
        d = a[j].getBoundingClientRect();
        x = (d.left + d.right) / 2; //based on the center of each element
        y = (d.top + d.bottom) / 2;
        if (x < minX) {
          minX = x;
        }
        if (x > maxX) {
          maxX = x;
        }
        if (y < minY) {
          minY = y;
        }
        if (y > maxY) {
          maxY = y;
        }
        positions[j] = {x:x, y:y};
      }
      originX = isNaN(from) ? minX + (maxX - minX) * ratio : positions[from].x || 0;
      originY = isNaN(from) ? minY + (maxY - minY) * ratio : positions[from].y || 0;
      maxX = 0;
      minX = Infinity;
      for (j = 0; j < l; j++) {
        x = positions[j].x - originX;
        y = originY - positions[j].y;
        distances[j] = d = !axis ? Math.sqrt(x * x + y * y) : Math.abs((axis === "y") ? y : x);
        if (d > maxX) {
          maxX = d;
        }
        if (d < minX) {
          minX = d;
        }
      }
      distances.max = maxX - minX;
      distances.min = minX;
      distances.v = l = vars.amount || (vars.each * l) || 0;
      distances.b = (l < 0) ? base - l : base;
    }
    l = (distances[i] - distances.min) / distances.max;
    return distances.b + (ease ? ease.getRatio(l) : l) * distances.v;
  };
}

export default function Home({ homeData }) {
  const siteTitle = homeData.Title;

  useEffect(() => {
    gsap.from(".client-card",{
      scale: 0.75,
      opacity: 0,
      stagger:distributeByPosition({
        amount: 0.75
      }),
      ease: 'power1.in',
    });
    gsap.from(".tech-card",{
      scrollTrigger: {
        trigger: "#clientSection",
        start: "center center",
        end: "top bottom",
        id: "tech",
      },
      scale: 0.75,
      opacity: 0,
      stagger:distributeByPosition({
        amount: .75
      }),
      ease: 'power1.out',
    });
  })

  return (
    <Layout home title={siteTitle}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.section}>
        <ReactMarkdown source={homeData.description} />
      </section>
      {homeData.Client && homeData.Client.length > 0 ? (
        <section className={styles.section} id={'clientSection'}>
          <h2>Clients</h2>
          <div className={styles.cardGrid}>
            {homeData.Client.map((props) => (
              <ClientTease { ...props } key={props.id} scrollTrigger={'#clientSection'} />
            ))}
          </div>
        </section>
      ) : null}
      {homeData.Technology && homeData.Technology.length > 0 ? (
        <section className={styles.section} id={'techSection'}>
          <h2>Technology</h2>
          <div className={styles.cardGrid}>
            {homeData.Technology.map((props) => (
              <TechTease {...props} key={props.id} scrollTrigger={'#techSection'} />
            ))}
          </div>
        </section>
      ) : null}
      <ContactForm />
    </Layout>
  )
}

export async function getStaticProps() {
  const homData = await getHomeData()
  return {
    props: {
      homeData: homData,
    }
  }
}
