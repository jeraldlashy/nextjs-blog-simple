import Head from "next/head";
import Link from "next/link";
import Date from "../components/Date";

import Layout, { siteTitle } from "../components/layouts/Layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";


export async function getStaticProps(){
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData,
    },
  };
}


export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hie, I am a Software and Cloud Developer experinced in Web Apps and Micro Services.</p>
        <p>
          (Bsc MIS | OCP Java Se 11 | CCNA | Udacity Cloud Dev Nanodegree | NC-ICT(Hexco) )
        </p>
      </section>

       {/* Add this <section> tag below the existing <section> tag */}
       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}