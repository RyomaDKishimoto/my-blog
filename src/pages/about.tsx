import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { css } from '@emotion/react';
import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';
import SubscribeImage from '../components/subscribe/SubscribeImage';
import { SocialLink, SocialLinkForAboutPage } from '../../src/styles/shared';
import config from '../website-config';
import { Facebook } from '../components/icons/facebook';
import { Twitter } from '../components/icons/twitter';
import { Instagram } from '../components/icons/instagram';
import { Youtube } from '../components/icons/youtube';

import styled from '@emotion/styled';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      // background: ${colors.darkmode};
      background: #0A041A;
    }
  }
`;

const SocialLinks = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;

const About: React.FC = () => {
  const [pageOnLoad, setPageOnLoad] = useState(false);
  useEffect(() => {
    setPageOnLoad(!pageOnLoad);
  }, []);

  return (
    <IndexLayout>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Wrapper css={PageTemplate}>
        <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
          <div css={[outer, SiteNavMain]}>
            <div css={inner}>
              <SiteNav isHome={false} />
            </div>
          </div>
        </header>
        <main id="site-main" className="site-main" css={[SiteMain, outer]}>
          <div css={inner}>
            <article className="post page" css={[PostFull, NoImage]}>
              <PostFullHeader className="post-full-header">
                <PostFullTitle className="post-full-title">沖縄県シングルマザーが受給できる情報まとめサイト</PostFullTitle>
              </PostFullHeader>
              <SubscribeImage />
              <PostFullContent className="post-full-content">
                <div className="post-content">
                  <p>
                    市町村が発信している情報は読みにくいし、分かりづらくないですか？
                  </p>
                  <p>
                    日々仕事と育児に忙しいお母さんにとって、そんな情報を全て読む時間もなければ、結局役所に足を運ぶのもめんどくさいのが本音だと思います。
                  </p>
                  <p>
                    そんな複雑の内容を、動画やシンプルにまとめた文章で日々忙しいお母さんへ届けるのがオキママです。
                  </p>
                  <p>
                    「宜野湾市の母子家庭の情報が欲しい！」「糸満の児童扶養手当の情報が欲しい！」といった要望があれば、すぐに希望の記事を投稿していきます。
                  </p>
                  <p>
                    欲しい記事の要望はYouTubeの動画コメント欄やSNSから連絡してくれればOKです。
                  </p>
                  <SocialLinks>
                    {config.facebook && (
                      <a
                        css={[SocialLinkForAboutPage]}
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
                        css={SocialLinkForAboutPage}
                        href={config.twitter}
                        title="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter />
                      </a>
                    )}
                    {config.instagram && (
                      <a
                        css={SocialLinkForAboutPage}
                        href={config.instagram}
                        title="Instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram />
                      </a>
                    )}
                    {config.youtube && (
                      <a
                        css={SocialLinkForAboutPage}
                        href={config.youtube}
                        title="YouTube"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Youtube />
                      </a>
                    )}
                  </SocialLinks>
                  <p>
                    こちらの動画は僕がオキママを作るキッカケについて話している動画になります。
                  </p>
                  {pageOnLoad ? (
                    <div>
                      <iframe allowFullScreen width="100%" height="315" src="https://www.youtube.com/embed/QuJGkwYw8K0" frameBorder="0" allow="autoplay; encrypted-media"/>
                    </div>
                  ) : null}
                </div>
              </PostFullContent>
            </article>
          </div>
        </main>
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};

export default About;
