SystemJS.config({
  baseURL: __dirname + "/",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "electron-ehr/": "src/"
  }
});
