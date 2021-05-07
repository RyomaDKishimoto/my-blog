import { Link } from 'gatsby';
import { setLightness } from 'polished';
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { colors } from '../styles/colors';
import { outer, inner, SocialLink } from '../styles/shared';
import config from '../website-config';
import { Facebook } from './icons/facebook';
import { Twitter } from './icons/twitter';
import { Instagram } from './icons/instagram';

export const Footer: React.FC = () => {
  return (
    <footer css={[outer, SiteFooter]}>
      <div css={[inner, SiteFooterContent]}>
        <section className="copyright">
          <Link to="/">Copyright</Link> &copy; {2021}{' '}
          {config.footer && (
            <Link to="/">
              | {config.title} All Rights Reserved.
            </Link>
          )}
        </section>
        <SiteFooterNav>
          {config.facebook && (
            <a
              className="social-link-fb"
              css={[SocialLink]}
              href={config.facebook}
              target="_blank"
              title="Facebook"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
          )}
          {config.twitter && (
            <a
              css={SocialLink}
              href={config.twitter}
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>
          )}
          <a
            css={SocialLink}
            href={config.twitter}
            title="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          {/* <a href="/rss.xml">RSS</a> */}
        </SiteFooterNav>
      </div>
    </footer>
  );
};

const SiteFooter = css`
  position: relative;
  padding-top: 20px;
  padding-bottom: 40px;
  color: #fff;
  background: #0a0b0c;
  // background: ${setLightness('0.0015', colors.darkgrey)};
`;

const SiteFooterContent = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.3rem;
  a {
    color: rgba(255, 255, 255, 0.7);
  }
  a:hover {
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
  }
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const SiteFooterNav = styled.nav`
  display: flex;

  a {
    position: relative;
    margin-left: 20px;
  }

  a:before {
    content: '';
    position: absolute;
    top: 11px;
    left: -11px;
    display: block;
    width: 2px;
    height: 2px;
    background: #fff;
    border-radius: 100%;
    display: none;
  }

  @media (max-width: 650px) {
    a:first-of-type {
      margin-left: 0;
    }
  }
`;

