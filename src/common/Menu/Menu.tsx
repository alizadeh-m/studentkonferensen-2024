import styles from './Menu.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MenuMobile from './MenuMobile/MenuMobile';
import React from 'react';

const Menu = () => {
  const { asPath: pathName } = useRouter();
  const menuItems = [
    { title: 'Start', link: '/' },
    { title: 'Mitt CV', link: '/resume' },
    { title: 'Hobbyprojekt', link: '/hobby' },
    { title: 'Informationssida', link: '/info' },
    { title: 'Nextjs-Showcase', link: 'https://nextjs.org/showcase', isExternal: true },
  ];
  return (
    <header className={styles.menuWrapper}>
      <MenuMobile menuItems={menuItems} pathName={pathName} />
      <div className={styles.menu}>
        <nav>
          <ul className={styles.menuLinkWrapper}>
            {menuItems.map((item, index) => (
              <li className={styles.menuLinkItem} key={index}>
                <Link
                  className={[styles.menuLink, pathName === item.link ? styles.menuLinkSelected : ''].join(' ')}
                  href={item.link}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  target={item.isExternal ? '_blank' : undefined}
                >
                  {item.isExternal ?
                    <div className={styles.menuLinkExternalWrapper}>
                      {item.title}
                      <div className={styles.menuLinkExternal}>
                        <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="Interface / External_Link">
                            <path
                              id="Vector"
                              d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                              stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                    : item.title
                  }
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Menu;
export { Menu };
