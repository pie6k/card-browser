const ghpages = require('gh-pages')

ghpages.publish('dist', function(err) {
  if (err) {
    console.log(`Error publishing`)
    console.log(err)
  }
})
