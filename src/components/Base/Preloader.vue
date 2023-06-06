<template>
  <svg
    id="preloader"
    width="491"
    height="77"
    viewBox="0 0 491 77"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.35938 73V4.84375H17.2344V61.4219H51.7344V73H3.35938Z"
      stroke="#0000B8"
      stroke-width="5"
    />
    <path
      d="M61.6719 73V4.28125H112.625V15.9062H75.5469V31.1406H110.047V42.7188H75.5469V61.4219H113.938V73H61.6719Z"
      stroke="#0000B8"
      stroke-width="5"
    />
    <path
      d="M122.891 39.0625C122.891 32.0625 123.938 26.1875 126.031 21.4375C127.594 17.9375 129.719 14.7969 132.406 12.0156C135.125 9.23438 138.094 7.17188 141.312 5.82812C145.594 4.01562 150.531 3.10938 156.125 3.10938C166.25 3.10938 174.344 6.25 180.406 12.5312C186.5 18.8125 189.547 27.5469 189.547 38.7344C189.547 49.8281 186.531 58.5156 180.5 64.7969C174.469 71.0469 166.406 74.1719 156.312 74.1719C146.094 74.1719 137.969 71.0625 131.938 64.8438C125.906 58.5938 122.891 50 122.891 39.0625ZM137.188 38.5938C137.188 46.375 138.984 52.2812 142.578 56.3125C146.172 60.3125 150.734 62.3125 156.266 62.3125C161.797 62.3125 166.328 60.3281 169.859 56.3594C173.422 52.3594 175.203 46.375 175.203 38.4062C175.203 30.5312 173.469 24.6562 170 20.7812C166.562 16.9062 161.984 14.9688 156.266 14.9688C150.547 14.9688 145.938 16.9375 142.438 20.875C138.938 24.7812 137.188 30.6875 137.188 38.5938Z"
      stroke="#0000B8"
      stroke-width="5"
    />
    <path
      d="M200.562 73V4.28125H214.062L242.188 50.1719V4.28125H255.078V73H241.156L213.453 28.1875V73H200.562Z"
      stroke="#0000B8"
      stroke-width="5"
    />
    <path
      d="M296.469 4.28125H321.828C327.547 4.28125 331.906 4.71875 334.906 5.59375C338.938 6.78125 342.391 8.89062 345.266 11.9219C348.141 14.9531 350.328 18.6719 351.828 23.0781C353.328 27.4531 354.078 32.8594 354.078 39.2969C354.078 44.9531 353.375 49.8281 351.969 53.9219C350.25 58.9219 347.797 62.9688 344.609 66.0625C342.203 68.4062 338.953 70.2344 334.859 71.5469C331.797 72.5156 327.703 73 322.578 73H296.469V4.28125ZM310.344 15.9062V61.4219H320.703C324.578 61.4219 327.375 61.2031 329.094 60.7656C331.344 60.2031 333.203 59.25 334.672 57.9062C336.172 56.5625 337.391 54.3594 338.328 51.2969C339.266 48.2031 339.734 44 339.734 38.6875C339.734 33.375 339.266 29.2969 338.328 26.4531C337.391 23.6094 336.078 21.3906 334.391 19.7969C332.703 18.2031 330.562 17.125 327.969 16.5625C326.031 16.125 322.234 15.9062 316.578 15.9062H310.344Z"
      stroke="#0000B8"
      stroke-width="5"
    />
    <path
      d="M365.891 73V4.28125H416.844V15.9062H379.766V31.1406H414.266V42.7188H379.766V61.4219H418.156V73H365.891Z"
      stroke="#0000B8"
      stroke-width="5"
    />
    <path
      d="M447.453 73L422.891 4.28125H437.938L455.328 55.1406L472.156 4.28125H486.875L462.266 73H447.453Z"
      stroke="#0000B8"
      stroke-width="5"
    />
  </svg>
</template>
<script>
export default {};
</script>
<style lang="scss">
#preloader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: fill 1s ease 3.5s forwards, zoom-in 10s ease 4s forwards;
  & path:nth-child(1) {
    stroke-dasharray: 234;
    stroke-dashoffset: 234;
    animation: line-anim 2s ease forwards;
  }
  & path:nth-child(2) {
    stroke-dasharray: 385;
    stroke-dashoffset: 385;
    animation: line-anim 2s ease forwards 0.3s;
  }
  & path:nth-child(3) {
    stroke-dasharray: 358;
    stroke-dashoffset: 358;
    animation: line-anim 2s ease forwards 0.6s;
  }
  & path:nth-child(4) {
    stroke-dasharray: 388;
    stroke-dashoffset: 388;
    animation: line-anim 2s ease forwards 0.9s;
  }
  & path:nth-child(5) {
    stroke-dasharray: 364;
    stroke-dashoffset: 364;
    animation: line-anim 2s ease forwards 1.2s;
  }
  & path:nth-child(6) {
    stroke-dasharray: 385;
    stroke-dashoffset: 385;
    animation: line-anim 2s ease forwards 1.5s;
  }
  & path:nth-child(7) {
    stroke-dasharray: 298;
    stroke-dashoffset: 298;
    animation: line-anim 2s ease forwards 1.8s;
  }
}

@keyframes line-anim {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes fill {
  from {
    fill: transparent;
  }
  to {
    fill: #0000b8;
  }
}
@keyframes zoom-in {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  85% {
    transform: translate(-100%, -50%) scale(95);
    opacity: 0;
  }
  100% {
    transform: translate(-100%, -50%) scale(100);
    opacity: 0;
  }
}
</style>
