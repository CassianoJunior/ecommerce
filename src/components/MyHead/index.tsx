import React from 'react';
import Head from 'next/head';

interface IMyHead {
  title: string;
}

const MyHead: React.FC<IMyHead> = ({ title }: IMyHead) => (
  <Head>
    <title>{title}</title>
  </Head>
);

export default MyHead;
