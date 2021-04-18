const fs = require('fs');

// README file Writer
module.exports = readmeContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', readmeContent, err => {
      if (err) {
        reject(err);
      
        return;
      } 

      resolve({
        ok: true,
        message: 'File Created!'
      })
    })
  })
}
