export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage?: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  youtube?: string;

  instagram?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
}

const config: WebsiteConfig = {
  title: 'オキママ',
  description: '沖縄県の母子家庭支援情報ブログ',
  coverImage: 'img/top-image.png',
  logo: 'img/ghost-logo.png',
  lang: 'ja',
  siteUrl: 'https://single-mothers-okinawa.netlify.app/',
  facebook: 'https://www.facebook.com/ryoma.okinawa',
  twitter: 'https://twitter.com/@HlCyXREkX4ge9zq',
  instagram: 'https://www.instagram.com/ryoma_okinawa',
  youtube: 'https://www.youtube.com/channel/UCiJTqx_gotsQ5uh9DYVy4Sg',
  showSubscribe: true,
  mailchimpAction: 'https://twitter.us19.list-manage.com/subscribe/post?u=a89b6987ac248c81b0b7f3a0f&amp;id=7d777b7d75',
  mailchimpName: 'b_a89b6987ac248c81b0b7f3a0f_7d777b7d75',
  mailchimpEmailFieldName: 'MERGE0',
  googleSiteVerification: 'GoogleCode',
  footer: 'is based on Gatsby Casper',
};

export default config;
