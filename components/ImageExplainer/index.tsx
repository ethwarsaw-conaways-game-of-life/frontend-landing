import Image from 'next/image'
import styles from './styles.module.css'
import React from 'react'

export interface img_props{
  img: any;
  title: string,
  tagline: string;
  link: string;
}

export default function ImageExplainer({
  img, 
  title,
  tagline,
  link
}: img_props) {
  return (
    <div className={styles.container}>
      <Image src={img} alt="my gif" height={500} width={500} />
      <a href={link} className={styles.link}>
        <div>
          {title}
          <br />
          {tagline}
        </div>
      </a>
    </div>
  )
}
