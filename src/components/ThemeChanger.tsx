import React from 'react';
import { css } from '@emotion/react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

export default () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <label>
        <input
          type="checkbox"
          className="theme-changer"
          css={themeChanger}
          checked={theme === 'dark'}
          onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
        />{' '}
        <div className="mode-container" css={modeContainer}>
          {theme === 'dark' ? <i className="gg-sun" css={sunIcon}/> : <i className="gg-moon" css={moonIcon} />}
        </div>
      </label>
    )}
  </ThemeToggler>
);

export const modeContainer = css`
    width: 24px;
    height: 24px;
    margin-left: 10px;
    margin-right: 10px;
`;

const sunIcon = css`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 24px;
    height: 24px;
    background: linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat 5px -6px/2px 6px,
      linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat 5px 14px/2px 6px,
      linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat -8px 5px/6px 2px,
      linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat 14px 5px/6px 2px;
    border-radius: 100px;
    box-shadow: inset 0 0 0 2px;
    border: 6px solid transparent;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 24px;
    height: 2px;
    border-right: 4px solid;
    border-left: 4px solid;
    left: -6px;
    top: 5px;
  }
  &::before {
    transform: rotate(-45deg);
  }
  &::after {
    transform: rotate(45deg);
  }
`;

const moonIcon = css`
  &,
  &::after {
    display: block;
    box-sizing: border-box;
    border-radius: 50%;
  }
  & {
    overflow: hidden;
    position: relative;
    transform: rotate(-135deg) scale(var(--ggs, 1));
    width: 20px;
    height: 20px;
    border: 2px solid;
    border-bottom-color: transparent;
  }
  &::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 18px;
    border: 2px solid transparent;
    box-shadow: 0 0 0 2px;
    top: 8px;
    left: 2px;
  }
`;

const themeChanger = css`
    display: none;
`;
