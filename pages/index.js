import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import homeStyles from '../styles/Home.module.css';

const Home = () => {
  const plans = [
    {
      title: "Pick Twice Weekly - $19.99",
      description: "Twice a week pickup",
      details: "Includes 8 Monthly Glassgo. bags. Cancel anytime",
      imageSrc: "/Bag.svg",
      altText: "Bag Icon",
      price: "per month"
    },
    {
      title: "Tri-Weekly Treasures - $34.99",
      description: "Three times a week pickup",
      details: "Enjoy three time weekly pick ups, Includes 12 Monthly Glassgo. bags. Cancel anytime",
      imageSrc: "/Bag2.svg",
      altText: "Bag Icon",
      price: "per month"
    }
  ];

  return (
    <Layout isHomepage={true}>
      <div className={homeStyles.container}>
        <main className={homeStyles.main}>
          <h1 className={homeStyles.title}>Glassgo.</h1>
          <p className={homeStyles.description}>
            Choose your glass bottle pick-up plan and help us keep the planet clean.
          </p>

          <section className={homeStyles.plans}>
            {plans.map((plan, index) => (
              <Link href="/subscribe" passHref key={index}>
                <article className={homeStyles.card} role="button" tabIndex="0">
                  <h2>{plan.title} <span className={homeStyles.smallText}>{plan.price}</span></h2>
                  <p>{plan.description}</p>
                  <p>{plan.details}</p>
                  <div className={homeStyles.svgContainer}>
                    <img className={homeStyles.svgImage} src={plan.imageSrc} alt={plan.altText} />
                  </div>
                  <div className={homeStyles.button}>Subscribe</div>
                </article>
              </Link>
            ))}
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
