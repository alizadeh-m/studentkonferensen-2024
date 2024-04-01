import React from 'react';
import Link from 'next/link';
import styles from './ResumeView.module.css';
import Image from 'next/image';

const ResumeView = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.linkWrapper}>
        Denna CV är en template hämtad från
        <Link
          className={styles.link}
          href='https://www.figma.com/community/collections/2023-resume-templates'
        >
          Figma
        </Link>
      </div>
      <Image
        width={500}
        height={800}
        src='/images/resume-steve.jpg'
        alt='steve-jobs-resume'
      />
    </div>
  );
};

export default ResumeView;
