import { useState, useEffect } from 'react';

import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import ProductCategory from '../components/ProductCategory';
import Filters from '../components/Filters';

export default function Home({ data }) {
  const [productNames, setProductNames] = useState();

  useEffect(() => {
    const products = {};
    for (const product of data) {
      if (!products[product.product_name]) {
        products[product.product_name] = [product];
      } else {
        products[product.product_name] = [
          ...products[product.product_name],
          product,
        ];
      }
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Edvora</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <Filters />
        <section>
          <h1 className={styles.title}>Edvora</h1>
          <h3 className={styles.subtitle}>Products</h3>
        </section>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch('https://assessment-edvora.herokuapp.com/');
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};
