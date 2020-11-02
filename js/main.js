"use-strict";

const main = () => {
  const buildDom = (html) => {
    const main = document.querySelector("main");
    main.innerHTML = html;
  };