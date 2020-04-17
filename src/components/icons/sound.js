import * as React from 'react';

function SoundIcon(props) {
  return (
    <svg width={19} height={19} viewBox="0 0 19 19" {...props}>
      <defs>
        <clipPath id="prefix__a">
          <path
            transform="translate(.397 .397)"
            fill="#536dfe"
            d="M0 0h19v19H0z"
          />
        </clipPath>
      </defs>
      <g transform="translate(-.397 -.397)" clipPath="url(#prefix__a)">
        <path
          d="M2.466 7.397v4.933h3.288l4.11 4.11V3.288l-4.11 4.11zm11.1 2.466a3.571 3.571 0 00-2.055-3.288v6.575a3.571 3.571 0 002.055-3.287zM11.507 2.63v1.726a5.744 5.744 0 010 11.014v1.726a7.423 7.423 0 000-14.466z"
          fill="#536dfe"
        />
        <path fill="none" d="M.397.397h19v19h-19z" />
      </g>
    </svg>
  );
}

export default SoundIcon;
