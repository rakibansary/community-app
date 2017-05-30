/**
 * Banner component
 */

import React from 'react';
import PT from 'prop-types';
import { themr } from 'react-css-themr';
import { Link } from 'react-router-dom';
import defaultStyle from './style.scss';

function Banner(props) {
  const { title, text, imageSrc, link, theme } = props;

  return (
    <div className={theme.container} style={{ backgroundImage: `url(${imageSrc})` }}>
      <div className={theme.content}>
        <div className={theme.contentBg} />
        <div className={theme.contentInner}>
          <h2 className={theme.title}>{title}</h2>
          <p className={theme.text}>{text}</p>
          {link &&
            <div className={theme.linkWrap}>
              <Link to={link.url} className={theme.link}>{link.title}</Link>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

Banner.defaultProps = {
  link: null,
  theme: {},
};

Banner.propTypes = {
  imageSrc: PT.string.isRequired,
  title: PT.string.isRequired,
  text: PT.string.isRequired,
  link: PT.shape({
    title: PT.string.isRequired,
    url: PT.string.isRequired,
  }),
  theme: PT.shape({
    container: PT.string,
    content: PT.string,
    contentBg: PT.string,
    contentInner: PT.string,
    title: PT.string,
    text: PT.string,
    linkWrap: PT.string,
    link: PT.string,
  }),
};

export default themr('tcCommunities-Banner', defaultStyle)(Banner);
