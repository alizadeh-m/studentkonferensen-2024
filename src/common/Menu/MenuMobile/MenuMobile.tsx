import React, { useState } from 'react';
import styles from './MenuMobile.module.css';
import Link from 'next/link';

interface Props {
  menuItems: {
    title: string;
    link: string;
    isExternal?: boolean;
  }[];
  pathName: string;
}

const MenuMobile = (props: Props) => {
  const { menuItems, pathName } = props;
  const [menu, showMenu] = useState(false);

  return (
    <>
      <div className={styles.menuBurgerWrapper}>
        <button onClick={() => showMenu(!menu)}>
          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {menu &&
        <div>
          <nav>
            <ul className={styles.menuLinkWrapper}>
              {menuItems.map((item, index) => (
                <Link
                  className={[styles.menuLink, pathName === item.link ? styles.menuLinkSelected : ''].join(' ')}
                  href={item.link}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  target={item.isExternal ? '_blank' : undefined}
                  key={index}
                  onClick={() => showMenu(false)}
                >
                  <li className={styles.menuLinkItem}>
                    {item.title}
                    {item.isExternal &&
                      <div className={styles.menuLinkExternal}>
                        <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                          <g id="Interface / External_Link">
                            <path id="Vector"
                                  d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                                  stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                        </svg>
                      </div>
                    }
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      }
    </>
  );
};

export default MenuMobile;
