import { graphql, StaticQuery } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import React from 'react';

import { css } from '@emotion/react';

import config from '../../website-config';

interface SiteimageProps {
  logo?: {
    childImageSharp: {
      fixed: FixedObject;
    };
  };
}

const SubscribeImage = () => (
  <StaticQuery
    query={graphql`
      query SubscribeOverlayImage {
        logo: file(relativePath: { eq: "img/alex-knight-326705-unsplash.jpg" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(quality: 100 width: 500) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={(data: SiteimageProps) => {
      if (!data.logo) {
        return;
      }

      return (
        <img
          css={SubscribeOverlayImage}
          className="subscribe-overlay-logo"
          src={data.logo.childImageSharp.fixed.src}
          alt={config.title}
        />
      );
    }}
  />
);

const SubscribeOverlayImage = css`
    display: block;
    margin: 1.5em auto;
    width: 100%;
    height: auto;
`;

export default SubscribeImage;
