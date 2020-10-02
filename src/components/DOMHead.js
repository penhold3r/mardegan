import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
//
const DOMHead = ({ metadata }) => (
   <Helmet>
      <title>{metadata.title}</title>
      {/* SEO */}
      <meta name="description" content={metadata.description || ''} />
      <meta name="keywords" content={metadata.keywords || ''} />
      <meta name="GOOGLEBOT" content="NOODP" />
      <meta name="googlebot" content="noodp" />
      <meta name="viewport" content="width=device-width" />
      <meta name="theme-color" content={metadata.color || '#000000'} />
      {/* facebook */}
      <meta property="og:site_name" content={metadata.name || ''} />
      <meta property="og:title" content={metadata.title || ''} />
      <meta property="og:url" content={metadata.url || ''} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={metadata.description || ''} />
      <meta property="og:image" content={metadata.image || ''} />
      <meta property="og:image:width" content="1205" />
      <meta property="og:image:height" content="630" />
      <meta property="fb:app_id" content={metadata.fb ? metadata.fb.id : '0'} />
      <meta property="fb:admins" content={metadata.fb ? metadata.fb.admins : '0'} />
      {/* google plus */}
      <meta itemprop="name" content={metadata.name || ''} />
      <meta itemprop="headline" content={metadata.name || ''} />
      <meta itemprop="description" content={metadata.description || ''} />
      <meta itemprop="image" content={metadata.image || ''} />
      <link rel="publisher" href={metadata.google ? metadata.google.id : '0'} />
      {/* twitter cards */}
      <meta name="twitter:title" content={metadata.name || ''} />
      <meta name="twitter:url" content={metadata.url || ''} />
      <meta name="twitter:description" content={metadata.description || ''} />
      <meta name="twitter:image" content={metadata.image || ''} />
      <meta name="twitter:card" content={metadata.twitter ? metadata.twitter.card_type : ''} />
      <meta name="twitter:site" content={metadata.twitter ? metadata.twitter.id : ''} />
      {/* favicons */}
      <link rel="shortcut icon" type="image/x-icon" href={metadata.favicon ? metadata.favicon.ico : "/favicon.ico"} />
      <link rel="icon" type="image/png" href={metadata.favicon ? metadata.favicon.png : "/favicon.png"} sizes="32x32 192x192" />
   </Helmet>
);
//
DOMHead.propTypes = {
   metadata: PropTypes.object
}
//
export default DOMHead;