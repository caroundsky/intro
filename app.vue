<template>
  <NuxtPage />
  <circles />
</template>

<style>
html,body {
  margin: 0;
  padding: 0;
  color: #24292f;
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
html {
  background: radial-gradient(circle farthest-corner at center top, #FFFFFF 0%, #eef3fb 100%);
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 16px;
}
ul, li {
  margin-top: 0;
  padding: 0;
  list-style: none;
}
a {
  color: inherit;
  text-decoration: inherit;
}
p {
  font-size: 1rem;
  margin: 1rem 0;
}
h2 {
  margin: 1.2rem 0;
}
h3 {
  margin: 1.1rem 0;
}
strong {
  font-weight: 500;
}
code {
  padding: 0.2em 0.4em;
  margin: 0;
  font-size: 85%;
  white-space: break-spaces;
  background-color: rgba(175,184,193,0.2);
  border-radius: 6px;
  margin: 0 0.2em;
}
</style>