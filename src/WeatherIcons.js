const strokeWidth = "3";

const icons = {
  2: (
    <svg viewBox="-5 -5 80.2 69.3">
      <defs>
        <linearGradient
          id="b"
          x1="39.2"
          x2="61.5"
          y1="32.8"
          y2="10.4"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d0e8f8" />
          <stop offset="1" stopColor="#e1eef9" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="29"
          x2="48.3"
          y1="55"
          y2="35.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fdb728" />
          <stop offset="1" stopColor="#ffcd23" />
        </linearGradient>
        <linearGradient
          id="a"
          x1="4.1"
          x2="14.6"
          y1="51.6"
          y2="51.6"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#00aeef" />
          <stop offset="1" stopColor="#00bdf2" />
        </linearGradient>
        <linearGradient
          href="#a"
          id="d"
          x1="14.7"
          x2="25.2"
          y1="51.6"
          y2="51.6"
        />
      </defs>
      <path
        fill="none"
        stroke="#231f20"
        strokeMiterlimit="10"
        strokeWidth=".5"
        d="M46.3 36.7a10.7 10.7 0 1 0 0-21.3H46a17 17 0 0 0-32.4-5.1h-.2a13.2 13.2 0 0 0 0 26.4Z"
      />
      <path
        fill="url(#b)"
        d="M62.8 30a7.4 7.4 0 1 0 0-14.7 11.7 11.7 0 0 0-22.4-3.5h-.2a9.1 9.1 0 0 0 0 18.2"
      />
      <path
        fill="url(#c)"
        d="M40.9 33a5.8 5.8 0 0 0-4.5 2.6L31 44.7c-.8 1.4-.2 2.5 1.5 2.4l4.3-.3c1.6-.1 2.3 1 1.5 2.4L33.6 58c-.7 1.4-.3 1.8 1 .7l17.2-14.2c1.3-1 1-1.8-.6-1.8l-6.7.3c-1.6 0-2.3-1-1.5-2.5l3-5c.8-1.4.1-2.5-1.5-2.6Z"
      />
      <path
        fill="url(#a)"
        d="M6 59.2a2 2 0 0 1-1-.3 2 2 0 0 1-.7-2.7L10.8 45a2 2 0 1 1 3.5 2L7.8 58.2a2 2 0 0 1-1.7 1Z"
      />
      <path
        fill="url(#d)"
        d="M16.7 59.2a2 2 0 0 1-1.7-3L21.5 45a2 2 0 1 1 3.4 2l-6.5 11.2a2 2 0 0 1-1.7 1Z"
      />
    </svg>
  ),
  21: (
    <svg viewBox="-5 -5 77 73.3">
      <defs>
        <linearGradient
          id="a"
          x1="40.5"
          x2="58.8"
          y1="22.1"
          y2="3.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fdb728" />
          <stop offset="1" stopColor="#ffcd23" />
        </linearGradient>
        <linearGradient
          href="#a"
          id="b"
          x1="19.9"
          x2="39.1"
          y1="58.9"
          y2="39.7"
        />
        <linearGradient
          id="c"
          x1="38.9"
          x2="59.2"
          y1="41.2"
          y2="20.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d0e8f8" />
          <stop offset="1" stopColor="#e1eef9" />
        </linearGradient>
      </defs>
      <circle cx="49.6" cy="13" r="13" fill="url(#a)" />
      <path
        fill="#fff"
        stroke="#231f20"
        strokeMiterlimit="10"
        strokeWidth={strokeWidth}
        d="M46.1 40.6a10.7 10.7 0 0 0 0-21.3H46a17 17 0 0 0-32.4-5h-.3a13.2 13.2 0 1 0 0 26.3Z"
      />
      <path
        fill="url(#b)"
        d="M31.7 37a5.8 5.8 0 0 0-4.5 2.5L22 48.6c-.8 1.5-.2 2.5 1.5 2.4l4.3-.3c1.6-.1 2.3 1 1.5 2.4L24.6 62c-.8 1.5-.4 1.8.8.8l17.3-14.3c1.3-1 1-1.8-.6-1.7l-6.7.3c-1.6 0-2.3-1-1.5-2.4l3-5c.8-1.5 0-2.6-1.6-2.6Z"
      />
      <path
        fill="url(#c)"
        d="M60.4 38.6a6.7 6.7 0 0 0 0-13.3h-.1A10.7 10.7 0 0 0 39.9 22h-.1a8.3 8.3 0 1 0 0 16.5"
      />
    </svg>
  ),
  212: (
    <svg viewBox="-5 -5 79.9 69.2">
      <defs>
        <linearGradient
          id="a"
          x1="17.9"
          x2="37.1"
          y1="54.9"
          y2="35.6"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fdb728" />
          <stop offset="1" stopColor="#ffcd23" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="38.7"
          x2="61.2"
          y1="35.4"
          y2="12.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d0e8f8" />
          <stop offset="1" stopColor="#e1eef9" />
        </linearGradient>
      </defs>
      <path
        fill="none"
        stroke="#231f20"
        strokeMiterlimit="10"
        strokeWidth={strokeWidth}
        d="M46.1 36.6a10.7 10.7 0 0 0 0-21.4H46a17 17 0 0 0-32.4-5h-.3a13.2 13.2 0 1 0 0 26.4Z"
      />
      <path
        fill="url(#a)"
        d="M29.7 32.8a5.7 5.7 0 0 0-4.5 2.6L20 44.5c-.8 1.5-.2 2.5 1.5 2.4l4.3-.3c1.6-.1 2.3 1 1.5 2.4l-4.7 8.8c-.8 1.5-.4 1.8.8.8l17.3-14.3c1.3-1 1-1.8-.6-1.7l-6.6.3c-1.7.1-2.4-1-1.5-2.4l2.9-5c.8-1.5.1-2.6-1.5-2.6Z"
      />
      <path
        fill="url(#b)"
        d="M62.5 32.6a7.4 7.4 0 1 0 0-14.9h-.1a11.8 11.8 0 0 0-22.6-3.5h-.2a9.2 9.2 0 0 0 0 18.4"
      />
    </svg>
  ),
  3: (
    <svg viewBox="-5 -5 79.2 70.2">
      <defs>
        <linearGradient
          id="a"
          x1="35.5"
          x2="59.8"
          y1="34.8"
          y2="10.4"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d0e8f8" />
          <stop offset="1" stopColor="#e1eef9" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="7.9"
          x2="14.8"
          y1="48.5"
          y2="48.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#00aeef" />
          <stop offset="1" stopColor="#00bdf2" />
        </linearGradient>
        <linearGradient
          href="#b"
          id="c"
          x1="24"
          x2="30.9"
          y1="48.5"
          y2="48.5"
        />
        <linearGradient
          href="#b"
          id="d"
          x1="40.1"
          x2="47"
          y1="48.5"
          y2="48.5"
        />
        <linearGradient
          href="#b"
          id="e"
          x1="12.9"
          x2="19.8"
          y1="55.7"
          y2="55.7"
        />
        <linearGradient
          href="#b"
          id="f"
          x1="29.5"
          x2="36.4"
          y1="55.7"
          y2="55.7"
        />
        <linearGradient
          href="#b"
          id="g"
          x1="46.1"
          x2="53"
          y1="55.7"
          y2="55.7"
        />
      </defs>
      <path
        fill="none"
        stroke="#231f20"
        strokeMiterlimit="10"
        strokeWidth=".5"
        d="M46.3 36.7a10.7 10.7 0 1 0 0-21.3H46a17 17 0 0 0-32.4-5.1h-.2a13.2 13.2 0 0 0 0 26.4Z"
      />
      <path
        fill="url(#a)"
        d="M61.2 31.7a8 8 0 1 0 0-16 12.8 12.8 0 0 0-24.5-3.8h-.2a10 10 0 1 0 0 19.9"
      />
      <path
        fill="url(#b)"
        d="M9.9 53a2 2 0 0 1-1-.3 2 2 0 0 1-.7-2.7l2.9-5a2 2 0 1 1 3.4 2l-2.9 5a2 2 0 0 1-1.7 1Z"
      />
      <path
        fill="url(#c)"
        d="M26 53a2 2 0 0 1-1-.3 2 2 0 0 1-.7-2.7l2.9-5a2 2 0 1 1 3.4 2l-2.9 5a2 2 0 0 1-1.7 1Z"
      />
      <path
        fill="url(#d)"
        d="M42.1 53a2 2 0 0 1-1.7-3l2.9-5a2 2 0 1 1 3.4 2l-2.9 5a2 2 0 0 1-1.7 1Z"
      />
      <path
        fill="url(#e)"
        d="M14.9 60.2a2 2 0 0 1-1-.3 2 2 0 0 1-.7-2.7l2.9-5a2 2 0 1 1 3.4 2l-2.9 5a2 2 0 0 1-1.7 1Z"
      />
      <path
        fill="url(#f)"
        d="M31.5 60.2a2 2 0 0 1-1.7-3l2.9-5a2 2 0 1 1 3.4 2l-2.9 5a2 2 0 0 1-1.7 1Z"
      />
      <path
        fill="url(#g)"
        d="M48.1 60.2a2 2 0 0 1-1.7-3l2.9-5a2 2 0 1 1 3.4 2l-2.9 5a2 2 0 0 1-1.7 1Z"
      />
    </svg>
  ),
  511: (
    <svg viewBox="-5 -5 77.2 75.4">
      <defs>
        <linearGradient
          id="a"
          x1="39"
          x2="59.3"
          y1="31.3"
          y2="10.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d0e8f8" />
          <stop offset="1" stopColor="#e1eef9" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="5.1"
          x2="15.6"
          y1="51.7"
          y2="51.7"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#00aeef" />
          <stop offset="1" stopColor="#00bdf2" />
        </linearGradient>
        <linearGradient
          href="#b"
          id="c"
          x1="12.2"
          x2="26.2"
          y1="54.7"
          y2="54.7"
        />
        <linearGradient href="#a" id="d" x1="33.4" x2="37.4" y1="46" y2="46" />
        <linearGradient href="#a" id="e" x1="43.4" x2="47.4" y1="46" y2="46" />
        <linearGradient
          href="#a"
          id="f"
          x1="24.4"
          x2="28.4"
          y1="62.6"
          y2="62.6"
        />
        <linearGradient
          href="#a"
          id="g"
          x1="29.4"
          x2="33.4"
          y1="54.1"
          y2="54.1"
        />
        <linearGradient
          href="#a"
          id="h"
          x1="39.4"
          x2="43.4"
          y1="54.1"
          y2="54.1"
        />
      </defs>
      <path
        fill="none"
        stroke="#231f20"
        strokeMiterlimit="10"
        strokeWidth=".5"
        d="M46.3 36.7a10.7 10.7 0 1 0 0-21.3H46a17 17 0 0 0-32.4-5.1h-.2a13.2 13.2 0 0 0 0 26.4Z"
      />
      <path
        fill="url(#a)"
        d="M60.5 28.7a6.7 6.7 0 1 0 0-13.4h-.1A10.7 10.7 0 0 0 40 12.1h-.2a8.3 8.3 0 1 0 0 16.6"
      />
      <path
        fill="url(#b)"
        d="M7 59.3a1.9 1.9 0 0 1-1-.3 2 2 0 0 1-.7-2.7L11.8 45a2 2 0 1 1 3.5 2L8.8 58.3a2 2 0 0 1-1.7 1Z"
      />
      <path
        fill="url(#c)"
        d="M14.2 65.4a2 2 0 0 1-1-.3 2 2 0 0 1-.7-2.7l10-17.4a2 2 0 1 1 3.4 2L16 64.3a2 2 0 0 1-1.7 1Z"
      />
      <circle cx="35.4" cy="46" r="2" fill="url(#d)" />
      <circle cx="45.4" cy="46" r="2" fill="url(#e)" />
      <circle cx="26.4" cy="62.6" r="2" fill="url(#f)" />
      <circle cx="31.4" cy="54.1" r="2" fill="url(#g)" />
      <circle cx="41.4" cy="54.1" r="2" fill="url(#h)" />
    </svg>
  ),
  5: (
    <svg viewBox="-5 -5 77 69.2">
      <defs>
        <linearGradient
          id="a"
          x1="38.9"
          x2="59.2"
          y1="33.1"
          y2="12.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d0e8f8" />
          <stop offset="1" stopColor="#e1eef9" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="3.9"
          x2="14.4"
          y1="51.5"
          y2="51.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#00aeef" />
          <stop offset="1" stopColor="#00bdf2" />
        </linearGradient>
        <linearGradient
          href="#b"
          id="c"
          x1="15.1"
          x2="25.6"
          y1="51.5"
          y2="51.5"
        />
        <linearGradient
          href="#b"
          id="d"
          x1="26.2"
          x2="36.7"
          y1="51.5"
          y2="51.5"
        />
      </defs>
      <path
        fill="none"
        stroke="#231f20"
        strokeMiterlimit="10"
        strokeWidth={strokeWidth}
        d="M46.1 36.6a10.7 10.7 0 0 0 0-21.4H46a17 17 0 0 0-32.4-5h-.3a13.2 13.2 0 1 0 0 26.4Z"
      />
      <path
        fill="url(#a)"
        d="M60.4 30.6a6.7 6.7 0 0 0 0-13.4h-.1A10.7 10.7 0 0 0 39.9 14h-.1a8.3 8.3 0 1 0 0 16.6"
      />
      <path
        fill="url(#b)"
        d="M6 59.2a2 2 0 0 1-1-.3 2 2 0 0 1-.8-2.7l6.5-11.3a2 2 0 1 1 3.5 2L7.7 58.2a2 2 0 0 1-1.8 1Z"
      />
      <path
        fill="url(#c)"
        d="M17 59.2a2 2 0 0 1-1-.3 2 2 0 0 1-.7-2.7l6.5-11.3a2 2 0 0 1 3.5 2l-6.5 11.3a2 2 0 0 1-1.7 1Z"
      />
      <path
        fill="url(#d)"
        d="M28.2 59.2a2 2 0 0 1-1.7-3L33 44.9a2 2 0 1 1 3.5 2L30 58.2a2 2 0 0 1-1.8 1Z"
      />
    </svg>
  ),
  504: (
    <svg viewBox="-5 -5 76.2 75.4">
      <defs>
        <linearGradient
          id="a"
          x1="38"
          x2="58.3"
          y1="30.3"
          y2="9.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d0e8f8" />
          <stop offset="1" stopColor="#e1eef9" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="5.1"
          x2="15.6"
          y1="51.7"
          y2="51.7"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#00aeef" />
          <stop offset="1" stopColor="#00bdf2" />
        </linearGradient>
        <linearGradient
          href="#b"
          id="c"
          x1="12.2"
          x2="26.2"
          y1="54.7"
          y2="54.7"
        />
        <linearGradient href="#b" id="d" x1="37" x2="47" y1="51.2" y2="51.2" />
        <linearGradient href="#b" id="e" x1="25.1" x2="37.1" y1="53" y2="53" />
      </defs>
      <path
        fill="none"
        stroke="#231f20"
        strokeMiterlimit="10"
        strokeWidth=".5"
        d="M46.3 36.7a10.7 10.7 0 1 0 0-21.3H46a17 17 0 0 0-32.4-5.1h-.2a13.2 13.2 0 0 0 0 26.4Z"
      />
      <path
        fill="url(#a)"
        d="M59.5 27.7a6.7 6.7 0 1 0 0-13.4h-.1A10.7 10.7 0 0 0 39 11.1h-.2a8.3 8.3 0 1 0 0 16.6"
      />
      <path
        fill="url(#b)"
        d="M7 59.3a1.9 1.9 0 0 1-1-.3 2 2 0 0 1-.7-2.7L11.8 45a2 2 0 0 1 3.5 2L8.8 58.3a2 2 0 0 1-1.7 1Z"
      />
      <path
        fill="url(#c)"
        d="M14.2 65.4a2 2 0 0 1-1-.3 2 2 0 0 1-.7-2.7l10-17.4a2 2 0 0 1 3.4 2L16 64.3a2 2 0 0 1-1.7 1Z"
      />
      <path
        fill="url(#d)"
        d="M39 58.4a2 2 0 0 1-1.7-3l6-10.4a2 2 0 0 1 3.4 2l-6 10.4a2 2 0 0 1-1.7 1Z"
      />
      <path
        fill="url(#e)"
        d="M27 61.9a1.9 1.9 0 0 1-1-.3 2 2 0 0 1-.7-2.7l8-13.9a2 2 0 0 1 3.5 2l-8 13.9a2 2 0 0 1-1.7 1Z"
      />
    </svg>
  ),
  522: (
    <svg viewBox="-5 -5 76.2 75.4">
      <defs>
        <linearGradient
          id="a"
          x1="38"
          x2="58.3"
          y1="30.3"
          y2="9.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d0e8f8" />
          <stop offset="1" stopColor="#e1eef9" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="5.1"
          x2="15.6"
          y1="51.7"
          y2="51.7"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#00aeef" />
          <stop offset="1" stopColor="#00bdf2" />
        </linearGradient>
        <linearGradient
          href="#b"
          id="c"
          x1="12.2"
          x2="26.2"
          y1="54.7"
          y2="54.7"
        />
        <linearGradient href="#b" id="d" x1="37" x2="47" y1="51.2" y2="51.2" />
        <linearGradient href="#b" id="e" x1="25.1" x2="37.1" y1="53" y2="53" />
      </defs>
      <path
        fill="none"
        stroke="#231f20"
        strokeMiterlimit="10"
        strokeWidth=".5"
        d="M46.3 36.7a10.7 10.7 0 1 0 0-21.3H46a17 17 0 0 0-32.4-5.1h-.2a13.2 13.2 0 0 0 0 26.4Z"
      />
      <path
        fill="url(#a)"
        d="M59.5 27.7a6.7 6.7 0 1 0 0-13.4h-.1A10.7 10.7 0 0 0 39 11.1h-.2a8.3 8.3 0 1 0 0 16.6"
      />
      <path
        fill="url(#b)"
        d="M7 59.3a1.9 1.9 0 0 1-1-.3 2 2 0 0 1-.7-2.7L11.8 45a2 2 0 0 1 3.5 2L8.8 58.3a2 2 0 0 1-1.7 1Z"
      />
      <path
        fill="url(#c)"
        d="M14.2 65.4a2 2 0 0 1-1-.3 2 2 0 0 1-.7-2.7l10-17.4a2 2 0 0 1 3.4 2L16 64.3a2 2 0 0 1-1.7 1Z"
      />
      <path
        fill="url(#d)"
        d="M39 58.4a2 2 0 0 1-1.7-3l6-10.4a2 2 0 0 1 3.4 2l-6 10.4a2 2 0 0 1-1.7 1Z"
      />
      <path
        fill="url(#e)"
        d="M27 61.9a1.9 1.9 0 0 1-1-.3 2 2 0 0 1-.7-2.7l8-13.9a2 2 0 0 1 3.5 2l-8 13.9a2 2 0 0 1-1.7 1Z"
      />
    </svg>
  ),
  60: (
    <svg viewBox="-5 -5 75 75.1">
      <defs>
        <linearGradient
          id="a"
          x1="11.3"
          x2="15.3"
          y1="46.9"
          y2="46.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d0e8f8" />
          <stop offset="1" stopColor="#e1eef9" />
        </linearGradient>
        <linearGradient
          href="#a"
          id="b"
          x1="21.3"
          x2="25.3"
          y1="46.9"
          y2="46.9"
        />
        <linearGradient
          href="#a"
          id="c"
          x1="31.3"
          x2="35.3"
          y1="46.9"
          y2="46.9"
        />
        <linearGradient
          href="#a"
          id="d"
          x1="41.3"
          x2="45.3"
          y1="46.9"
          y2="46.9"
        />
        <linearGradient
          href="#a"
          id="e"
          x1="11.3"
          x2="15.3"
          y1="63.1"
          y2="63.1"
        />
        <linearGradient
          href="#a"
          id="f"
          x1="21.3"
          x2="25.3"
          y1="63.1"
          y2="63.1"
        />
        <linearGradient
          href="#a"
          id="g"
          x1="31.3"
          x2="35.3"
          y1="63.1"
          y2="63.1"
        />
        <linearGradient
          href="#a"
          id="h"
          x1="41.3"
          x2="45.3"
          y1="63.1"
          y2="63.1"
        />
        <linearGradient
          href="#a"
          id="i"
          x1="6.3"
          x2="10.3"
          y1="55.1"
          y2="55.1"
        />
        <linearGradient
          href="#a"
          id="j"
          x1="16.3"
          x2="20.3"
          y1="55.1"
          y2="55.1"
        />
        <linearGradient
          href="#a"
          id="k"
          x1="26.3"
          x2="30.3"
          y1="55.1"
          y2="55.1"
        />
        <linearGradient
          href="#a"
          id="l"
          x1="36.3"
          x2="40.3"
          y1="55.1"
          y2="55.1"
        />
        <linearGradient
          href="#a"
          id="m"
          x1="36.9"
          x2="57.2"
          y1="32.1"
          y2="11.8"
        />
      </defs>
      <circle cx="13.3" cy="46.9" r="2" fill="url(#a)" />
      <circle cx="23.3" cy="46.9" r="2" fill="url(#b)" />
      <circle cx="33.3" cy="46.9" r="2" fill="url(#c)" />
      <circle cx="43.3" cy="46.9" r="2" fill="url(#d)" />
      <circle cx="13.3" cy="63.1" r="2" fill="url(#e)" />
      <circle cx="23.3" cy="63.1" r="2" fill="url(#f)" />
      <circle cx="33.3" cy="63.1" r="2" fill="url(#g)" />
      <circle cx="43.3" cy="63.1" r="2" fill="url(#h)" />
      <circle cx="8.3" cy="55.1" r="2" fill="url(#i)" />
      <circle cx="18.3" cy="55.1" r="2" fill="url(#j)" />
      <circle cx="28.3" cy="55.1" r="2" fill="url(#k)" />
      <circle cx="38.3" cy="55.1" r="2" fill="url(#l)" />
      <path
        fill="none"
        stroke="#231f20"
        strokeMiterlimit="10"
        strokeWidth={strokeWidth}
        d="M46.1 36.6a10.7 10.7 0 0 0 0-21.4H46a17 17 0 0 0-32.4-5h-.3a13.2 13.2 0 1 0 0 26.4Z"
      />
      <path
        fill="url(#m)"
        d="M58.4 29.6a6.7 6.7 0 0 0 0-13.4h-.1A10.7 10.7 0 0 0 37.9 13h-.1a8.3 8.3 0 1 0 0 16.6"
      />
    </svg>
  ),
  6: (
    <svg viewBox="-5 -5 77.2 75.4">
      <defs>
        <linearGradient
          id="b"
          x1="39"
          x2="59.3"
          y1="31.3"
          y2="10.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d0e8f8" />
          <stop offset="1" stopColor="#e1eef9" />
        </linearGradient>
        <linearGradient
          id="a"
          x1="5.1"
          x2="15.6"
          y1="51.7"
          y2="51.7"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#00aeef" />
          <stop offset="1" stopColor="#00bdf2" />
        </linearGradient>
        <linearGradient
          href="#a"
          id="c"
          x1="12.2"
          x2="26.2"
          y1="54.7"
          y2="54.7"
        />
        <linearGradient href="#b" id="d" x1="33.4" x2="37.4" y1="46" y2="46" />
        <linearGradient href="#b" id="e" x1="43.4" x2="47.4" y1="46" y2="46" />
        <linearGradient
          href="#b"
          id="f"
          x1="24.4"
          x2="28.4"
          y1="62.6"
          y2="62.6"
        />
        <linearGradient
          href="#b"
          id="g"
          x1="29.4"
          x2="33.4"
          y1="54.1"
          y2="54.1"
        />
        <linearGradient
          href="#b"
          id="h"
          x1="39.4"
          x2="43.4"
          y1="54.1"
          y2="54.1"
        />
      </defs>
      <path
        fill="none"
        stroke="#231f20"
        strokeMiterlimit="10"
        strokeWidth=".5"
        d="M46.3 36.7a10.7 10.7 0 1 0 0-21.3H46a17 17 0 0 0-32.4-5.1h-.2a13.2 13.2 0 0 0 0 26.4Z"
      />
      <path
        fill="url(#b)"
        d="M60.5 28.7a6.7 6.7 0 1 0 0-13.4h-.1A10.7 10.7 0 0 0 40 12.1h-.2a8.3 8.3 0 1 0 0 16.6"
      />
      <path
        fill="url(#a)"
        d="M7 59.3a1.9 1.9 0 0 1-1-.3 2 2 0 0 1-.7-2.7L11.8 45a2 2 0 1 1 3.5 2L8.8 58.3a2 2 0 0 1-1.7 1Z"
      />
      <path
        fill="url(#c)"
        d="M14.2 65.4a2 2 0 0 1-1-.3 2 2 0 0 1-.7-2.7l10-17.4a2 2 0 1 1 3.4 2L16 64.3a2 2 0 0 1-1.7 1Z"
      />
      <circle cx="35.4" cy="46" r="2" fill="url(#d)" />
      <circle cx="45.4" cy="46" r="2" fill="url(#e)" />
      <circle cx="26.4" cy="62.6" r="2" fill="url(#f)" />
      <circle cx="31.4" cy="54.1" r="2" fill="url(#g)" />
      <circle cx="41.4" cy="54.1" r="2" fill="url(#h)" />
    </svg>
  ),
  7: (
    <svg viewBox="-5 -5 83.1 54.8">
      <defs>
        <linearGradient
          id="a"
          x1="21.9"
          x2="46.8"
          y1="32.2"
          y2="32.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d0e8f8" />
          <stop offset="1" stopColor="#e1eef9" />
        </linearGradient>
        <linearGradient
          href="#a"
          id="b"
          x1="36.2"
          x2="57.3"
          y1="12.8"
          y2="12.8"
        />
        <linearGradient
          href="#a"
          id="c"
          x1="55.2"
          x2="73"
          y1="17.2"
          y2="17.2"
        />
      </defs>
      <circle cx="13.6" cy="19.6" r="13.6" fill="#d0e8f8" />
      <circle
        cx="34.4"
        cy="32.2"
        r="12.4"
        fill="url(#a)"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth={strokeWidth}
      />
      <circle
        cx="46.8"
        cy="12.8"
        r="10.5"
        fill="url(#b)"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth={strokeWidth}
      />
      <circle cx="30.1" cy="10.1" r="10.1" fill="#d0e8f8" />
      <circle
        cx="64.1"
        cy="17.2"
        r="8.9"
        fill="url(#c)"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth={strokeWidth}
      />
      <circle cx="49.9" cy="28.4" r="8.9" fill="#d0e8f8" />
    </svg>
  ),
  781: (
    <svg viewBox="-5 -5 53 52.5">
      <defs>
        <linearGradient
          id="a"
          x2="43"
          y1="2"
          y2="2"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d0e8f8" />
          <stop offset="1" stopColor="#e1eef9" />
        </linearGradient>
        <linearGradient href="#a" id="b" x1="8" x2="33" y1="11.6" y2="11.6" />
        <linearGradient href="#a" id="c" x1="14" x2="36" y1="21.3" y2="21.3" />
        <linearGradient href="#a" id="d" x1="14" x2="30" y1="30.9" y2="30.9" />
        <linearGradient
          href="#a"
          id="e"
          x1="15.5"
          x2="20.5"
          y1="40.5"
          y2="40.5"
        />
      </defs>
      <path fill="url(#a)" d="M41 4H2a2 2 0 0 1 0-4h39a2 2 0 0 1 0 4Z" />
      <path fill="url(#b)" d="M31 13.6H10a2 2 0 0 1 0-4h21a2 2 0 0 1 0 4Z" />
      <path fill="url(#c)" d="M34 23.3H16a2 2 0 0 1 0-4h18a2 2 0 0 1 0 4Z" />
      <path fill="url(#d)" d="M28 32.9H16a2 2 0 1 1 0-4h12a2 2 0 0 1 0 4Z" />
      <path fill="url(#e)" d="M18.5 42.5h-1a2 2 0 0 1 0-4h1a2 2 0 0 1 0 4Z" />
    </svg>
  ),
  761: (
    <svg viewBox="-5 -5 72.5 50.9">
      <defs>
        <linearGradient
          id="a"
          x1="6"
          x2="34.9"
          y1="34.9"
          y2="6"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fdb728" />
          <stop offset="1" stopColor="#ffcd23" />
        </linearGradient>
      </defs>
      <circle cx="20.5" cy="20.5" r="20.5" fill="url(#a)" />
      <circle cx="30.5" cy="20.2" r="2" fill="#cec2c2" />
      <circle cx="40.5" cy="20.2" r="2" fill="#cec2c2" />
      <circle cx="50.5" cy="20.2" r="2" fill="#cec2c2" />
      <circle cx="60.5" cy="20.2" r="2" fill="#cec2c2" />
      <circle cx="40.5" cy="34.2" r="2" fill="#cec2c2" />
      <circle cx="50.5" cy="34.2" r="2" fill="#cec2c2" />
      <circle cx="25.5" cy="27.2" r="2" fill="#cec2c2" />
      <circle cx="35.5" cy="27.2" r="2" fill="#cec2c2" />
      <circle cx="45.5" cy="27.2" r="2" fill="#cec2c2" />
      <circle cx="55.5" cy="27.2" r="2" fill="#cec2c2" />
    </svg>
  ),
  721: (
    <svg viewBox="-5 -5 74.2 50.9">
      <defs>
        <linearGradient
          id="a"
          x1="6"
          x2="34.9"
          y1="34.9"
          y2="6"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fdb728" />
          <stop offset="1" stopColor="#ffcd23" />
        </linearGradient>
      </defs>
      <circle cx="20.5" cy="20.5" r="20.5" fill="url(#a)" />
      <path
        fill="#fff"
        stroke="#ed1c24"
        strokeMiterlimit="10"
        strokeWidth="0.5"
        d="M31.1 21.2h-10a1.5 1.5 0 0 1 0-3h10a1.5 1.5 0 0 1 0 3Zm21.5 0h-15a1.5 1.5 0 0 1 0-3h15a1.5 1.5 0 0 1 0 3ZM31.1 35.7h-10a1.5 1.5 0 0 1 0-3h10a1.5 1.5 0 0 1 0 3Zm21.5 0h-15a1.5 1.5 0 0 1 0-3h15a1.5 1.5 0 0 1 0 3Zm-11.5-7h-20a1.5 1.5 0 0 1 0-3h20a1.5 1.5 0 0 1 0 3Zm21.5 0h-15a1.5 1.5 0 0 1 0-3h15a1.5 1.5 0 0 1 0 3Z"
      />
    </svg>
  ),
  800: (
    <svg viewBox="-5 -5 50.9 50.9">
      <defs>
        <linearGradient
          id="a"
          x1="6"
          x2="34.9"
          y1="34.9"
          y2="6"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fdb728" />
          <stop offset="1" stopColor="#ffcd23" />
        </linearGradient>
      </defs>
      <circle cx="20.5" cy="20.5" r="20.5" fill="url(#a)" />
    </svg>
  ),
  80: (
    <svg viewBox="-5 -5 71.4 50.4">
      <defs>
        <linearGradient
          id="a"
          x1="39.3"
          x2="57.6"
          y1="22.1"
          y2="3.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fdb728" />
          <stop offset="1" stopColor="#ffcd23" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="31.9"
          x2="52.2"
          y1="36.8"
          y2="16.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d0e8f8" />
          <stop offset="1" stopColor="#e1eef9" />
        </linearGradient>
      </defs>
      <circle cx="48.5" cy="13" r="13" fill="url(#a)" />
      <path
        fill="#fff"
        stroke="#231f20"
        strokeMiterlimit="10"
        strokeWidth={strokeWidth}
        d="M46.1 40.3a10.7 10.7 0 0 0 0-21.4H46a17 17 0 0 0-32.4-5h-.3a13.2 13.2 0 0 0 0 26.4Z"
      />
      <path
        fill="url(#b)"
        d="M53.4 34.3a6.7 6.7 0 0 0 0-13.4h-.1a10.7 10.7 0 0 0-20.4-3.2h-.1a8.3 8.3 0 0 0 0 16.6"
      />
    </svg>
  ),
  804: (
    <svg viewBox="-5 -5 77.2 46.9">
      <defs>
        <linearGradient
          id="a"
          x1="39"
          x2="59.3"
          y1="35.3"
          y2="14.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d0e8f8" />
          <stop offset="1" stopColor="#e1eef9" />
        </linearGradient>
      </defs>
      <path
        fill="none"
        stroke="#231f20"
        strokeMiterlimit="10"
        strokeWidth=".5"
        d="M46.3 36.7a10.7 10.7 0 1 0 0-21.3H46a17 17 0 0 0-32.4-5.1h-.2a13.2 13.2 0 0 0 0 26.4Z"
      />
      <path
        fill="url(#a)"
        d="M60.5 32.7a6.7 6.7 0 1 0 0-13.4h-.1A10.7 10.7 0 0 0 40 16.1h-.2a8.3 8.3 0 0 0 0 16.6"
      />
    </svg>
  ),
};

const WeatherIcons = (props) => {
  const id = props.id.toString();
  return (
    <div className={props.className}>
      {icons[id] || icons[id.slice(0, 2)] || icons[id.slice(0, 1)]}
    </div>
  );
};

export default WeatherIcons;
