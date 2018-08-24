var siteInfo = require('./content/setup/info.json');
console.log(siteInfo)
var glob = require('glob');
var fs = require("fs");
var path = require('path');

// Enhance Nuxt's generate process by gathering all content files from Netifly CMS
// automatically and match it to the path of your Nuxt routes.
// The Nuxt routes are generate by Nuxt automatically based on the pages folder.
var dynamicRoutes = getDynamicPaths({
  '/blog': 'blog/posts/*.json',
  '/page': 'page/posts/*.json',
  '/category': 'categories/posts/*.json',
  '/service': 'services/posts/*.json',
  '/tagged': 'tags/posts/*.json',
});

console.log('Dynaice Routes',dynamicRoutes)

module.exports = {
  mode: "universal",
  /*
  ** Headers of the page
  */
transition: { mode: "in-out"},
  head: {
    title: siteInfo.sitename,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: siteInfo.sitedescription }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Archivo+Black' }
    ]
  },
  css: ["~/assets/grid.css","bf-solid/dist/solid.2.10.6.css"],
  // icon: {
  //   iconSrc: `${siteInfo.siteicon}`
  //  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: ['@nuxtjs/markdownit', '@nuxtjs/pwa','@nuxtjs/axios'],
  markdownit: {
    injected: true,
    preset: 'default',
    breaks: true,
    html: true

    
  },
  manifest: {
    name: siteInfo.sitename,
    short_name: siteInfo.sitename,
    description: siteInfo.sitedescription,
    lang: 'en'
  },
  workbox: {
    fetch: true,
    runtimeCaching: [
      {
        urlPattern: '/images/uploads/.*',
        handler: 'cacheFirst',
        strategyOptions: {
          cacheName: 'image-cache',
          cacheExpiration: {
            maxEntries: 100,
            maxAgeSeconds: 86400
          }
        }
      }
    ]
  },

  /*
  ** Route config for pre-rendering
  */
 router: {
  scrollBehavior: function (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
middleware: ['title']
 },
  generate: {
    routes: dynamicRoutes
  },
  plugins: ['~/plugins/vuefuse',{
    src: "~/plugins/moment",
    ssr: false
  }],
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true
    /*
    ** Run ESLint on save
    */

  }
}

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
// [].concat(
//   ...Object.keys(urlFilepathTable).map(url => {
//     var filepathGlob = urlFilepathTable[url];
//     glob(urlFilepathTable[url], { cwd: 'content' }, function(err, files) { // read the folder or folders if you want: example json/**/*.json
//           if(err) {
//             console.log("cannot read the folder, something goes wrong with glob", err);
//           }
//           // console.log(files);
//           // var matters = [];
//           var fileReadOptions = {
//               'encoding':'utf-8'
//           };
//           files.forEach(function(file) {
//             filePath = '/Users/apoulsen/sites/bael-template/content/' + file;
//             // console.log('file',file)
//             // var content=fs.readFileSync(file, "utf-8");
//             // console.log(content);
//             fs.readFile(filePath, 'utf-8', handleJsonFile);

//             // fs.readFile(file, 'utf-8', function (err, data) { // Read each file
//             //   console.log('err', err)
//               // if(err) {
//               //   console.log("cannot read the file, something goes wrong with the file", err);
//               // }
//               // console.log(data)
//               // var obj = JSON.parse(data);
//             // });
//           });
//           function handleJsonFile (err, data) {
//               if (err) throw err;
//               var dataObject = JSON.parse(data);
              
//               var i;
//               var childrenservices;
//               console.log(dataObject)
//               console.log(dataObject.childrenservices)
//               // Loop through all possible action.
//               // for (i = 0; i < dataObject.childrenservices.length; ++i) {
//               //     childrenservices = dataObject.childrenservices[i];
//               //     console.log(childrenservices)
//               // }
//               // if (delCounter > 1) {
//               //     throw new Exception('Jsons  not valid.');
//               // }
//           }
//         });
//     })
//   );
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
            var filepathGlob = urlFilepathTable[url];
      console.log('filepathGlob', filepathGlob)
      
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.json')}`);
    })
  );
}
