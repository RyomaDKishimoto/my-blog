import { lighten } from 'polished';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from './colors';

export const outer = css`
  position: relative;
  // padding: 0 5vw;

  @media screen and (min-width: 480px) {
    padding: 0 1.5vw;
  }
`;

// Centered content container blocks
export const inner = css`
  margin: 0 auto;
  max-width: 1040px;
  width: 100%;
`;

export const SiteNavMain = css`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  /* background: color(var(--darkgrey) l(-5%)); */
  background: ${lighten('-0.05', colors.darkgrey)};
`;

export const SiteMain = css`
  flex-grow: 1;
  padding: 0 4vw;
  @media (prefers-color-scheme: dark) {
    // background: ${colors.darkmode};
    background: #0A041A;
  }
`;

export const SiteTitle = styled.h1`
  z-index: 10;
  margin: 0 0 0 -2px;
  padding: 0;
  font-size: 5rem;
  line-height: 1em;
  font-weight: 600;

  @media (max-width: 500px) {
    font-size: 4.2rem;
  }
`;

export const SiteDescription = styled.h2`
  z-index: 10;
  margin: 0;
  padding: 5px 0;
  font-size: 2.1rem;
  line-height: 1.4em;
  font-weight: 400;
  opacity: 0.8;

  @media (max-width: 500px) {
    font-size: 1.8rem;
  }
`;

export const Posts = css`
  overflow-x: hidden;
`;

export const PostFeed = css`
    /* Styles For Mobile */
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 40px 0 5vw;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    margin: 0 -20px;
    padding: 50px 0 0;
    background: #fff;

    @media screen and (min-width: 480px) {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      margin: 0 -20px;
      padding: 50px 0 0;
      background: #fff;

      /* Special Template Styles */
      padding: 40px 0 5vw;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }

  @media (prefers-color-scheme: dark) {
    // background: ${colors.darkmode};
    background: #0A041A;
  }
`;

export const SocialLink = css`
  display: inline-block;
  margin: 0;
  padding: 10px;
  opacity: 0.8;

  :hover {
    opacity: 1;
  }

  svg {
    height: 1.8rem;
    fill: #fff;
  }

  svg.twitter-link {
    fill: #1DA1F2;
  }

  svg.facebook-link {
    fill: #3b5998;
    background: #fff;
    border-radius: 50px;
  }

  svg.instagram-link {
    background: radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);
    border-radius: 10px;
  }

  svg.youtube-link {
    border-radius: 10px;
    fill: #bb0000;
    background: #fff;
  }
`;

export const SocialLinkForAboutPage = css`
  display: inline-block;
  margin: 0;
  padding: 10px;
  opacity: 0.8;

  :hover {
    opacity: 1;
  }

  svg {
    height: 3.8rem;
    fill: #fff;
  }

  svg.twitter-link {
    fill: #1DA1F2;
  }

  svg.instagram-link {
    background: radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);
    border-radius: 10px;
  }

  svg.facebook-link {
    fill: #3b5998;
    background: #fff;
    border-radius: 50px;
  }

  svg.youtube-link {
    border-radius: 10px;
    fill: #bb0000;
    background: #fff;
  }
`;

export const SiteHeader = css``;

export const SiteHeaderContent = styled.div`
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3vw 3vw;
  min-height: 200px;
  max-height: 340px;
`;

export const SiteHeaderStyles = css`
  position: relative;
  padding-bottom: 12px;
  color: #fff;
  /* background: color(var(--darkgrey) l(-5%)) no-repeat center center; */
  background: ${lighten('-0.05', colors.darkgrey)} no-repeat center center;
  background-size: cover;

  :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    display: block;
    background: rgba(0, 0, 0, 0.18);
  }
  :after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: auto;
    left: 0;
    z-index: 10;
    display: block;
    height: 140px;
    background: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0));
  }

  @media (prefers-color-scheme: dark) {
    :before {
      // background: rgba(0, 0, 0, 0.6);
      background: #0A041A;;
    }
  }
`;

export const AuthorProfileImage = css`
  flex: 0 0 60px;
  margin: 0;
  width: 60px;
  height: 60px;
  border: none;

  @media (prefers-color-scheme: dark) {
    box-shadow: 0 0 0 6px hsla(0, 0%, 100%, 0.04);
    background: ${colors.darkmode};
  }
`;

// tag and author post lists
export const SiteArchiveHeader = css`
  .site-header-content {
    position: relative;
    align-items: stretch;
    // padding: 12vw 0 20px;
    padding: 12vw 4vw 20px;
    min-height: 200px;
    max-height: 600px;
  }
`;

export const SiteHeaderBackground = css`
  margin-top: 64px;
`;

export const ResponsiveHeaderBackground = styled.div<{ backgroundImage?: string }>`
  ${p =>
    p.backgroundImage &&
    `
    position: relative;
    margin-top: 64px;
    padding-bottom: 12px;
    color: #fff;
    background-size: cover;
    /* background: color(var(--darkgrey) l(-5%)) no-repeat center center; */
    background: #090a0b no-repeat 50%;
    background-image: url(${p.backgroundImage});

    :before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 10;
      display: block;
      background: rgba(0, 0, 0, 0.18);
    }

    :after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: auto;
      left: 0;
      z-index: 10;
      display: block;
      height: 140px;
      background: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0));
    }

    @media (prefers-color-scheme: dark) {
      &:before {
        background: #0A041A;
      }
    }
  `}

  ${p =>
    !p.backgroundImage &&
    `

    padding-top: 0;
    padding-bottom: 0;
    /* color: var(--darkgrey); */
    color: ${colors.darkgrey};
    background: #fff;
    opacity: 1;


  .site-description {
    /* color: var(--midgrey); */
    color: ${colors.midgrey};
    opacity: 1;
  }

  .site-header-content {
    padding: 5vw 0 10px;
    /* border-bottom: 1px solid color(var(--lightgrey) l(+12%)); */
    border-bottom: 1px solid ${lighten('0.12', colors.lightgrey)};
  }

  .author-bio {
    /* color: var(--midgrey); */
    color: ${colors.midgrey};
    opacity: 1;
  }

  .author-meta {
    /* color: var(--midgrey); */
    color: ${colors.midgrey};
    opacity: 1;
  }

  .author-social-link a {
    /* color: var(--darkgrey); */
    color: ${colors.darkgrey};
  }

  .author-social-link a:before {
    /* color: var(--midgrey); */
    color: ${colors.midgrey};
  }

  .author-location + .author-stats:before,
  .author-stats + .author-social-link:before,
  .author-social-link + .author-social-link:before {
    /* color: var(--midgrey); */
    color: ${colors.midgrey};
  }

  .author-header {
    padding-bottom: 20px;
  }

  @media (max-width: 500px) {
    .site-header-content {
      flex-direction: column;
      align-items: center;
      min-height: unset;
    }

    .site-title {
      font-size: 4.2rem;
      text-align: center;
    }

    .site-header-content {
      padding: 12vw 0 20px;
    }

    .author-header {
      padding-bottom: 10px;
    }
  }
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.9);
    /* background: var(--darkmode); */
    background: ${colors.darkmode};

    .site-header-content {
      /* border-bottom-color: color(var(--darkmode) l(+15%)); */
      /* border-bottom-color: ${lighten('0.15', colors.darkmode)}; */
      border-bottom-color: #272a30;
    }

    .author-social-link a {
      color: rgba(255, 255, 255, 0.75);
    }
  }
  `}
`;

export const NoImage = css`
  .no-image {
    padding-top: 0;
    padding-bottom: 0;
    /* color: var(--darkgrey); */
    color: ${colors.darkgrey};
    background: #fff;
    opacity: 1;
  }

  .no-image .site-description {
    /* color: var(--midgrey); */
    color: ${colors.midgrey};
    opacity: 1;
  }

  .no-image .site-header-content {
    padding: 5vw 0 10px;
    /* border-bottom: 1px solid color(var(--lightgrey) l(+12%)); */
    border-bottom: 1px solid ${lighten('0.12', colors.lightgrey)};
  }

  .no-image .author-bio {
    /* color: var(--midgrey); */
    color: ${colors.midgrey};
    opacity: 1;
  }

  .no-image .author-meta {
    /* color: var(--midgrey); */
    color: ${colors.midgrey};
    opacity: 1;
  }

  .no-image .author-social-link a {
    /* color: var(--darkgrey); */
    color: ${colors.darkgrey};
  }

  .no-image .author-social-link a:before {
    /* color: var(--midgrey); */
    color: ${colors.midgrey};
  }

  .no-image .author-location + .author-stats:before,
  .no-image .author-stats + .author-social-link:before,
  .no-image .author-social-link + .author-social-link:before {
    /* color: var(--midgrey); */
    color: ${colors.midgrey};
  }

  @media (max-width: 500px) {
    .site-header-content {
      flex-direction: column;
      align-items: center;
      min-height: unset;
    }

    .site-title {
      font-size: 4.2rem;
      text-align: center;
    }

    .no-image .site-header-content {
      padding: 12vw 0 20px;
    }
  }
  @media (prefers-color-scheme: dark) {
    .no-image {
      color: rgba(255, 255, 255, 0.9);
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }

    .no-image .site-header-content {
      /* border-bottom-color: color(var(--darkmode) l(+15%)); */
      border-bottom-color: ${lighten('0.15', colors.darkmode)};
    }

    .no-image .author-social-link a {
      color: rgba(255, 255, 255, 0.75);
    }
  }
`;
