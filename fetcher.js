const request = require('request');
const fs = require('fs');

// Reading url from the command line
const domain = process.argv[2]
const url = `http://${domain}/`

// Reading filepath from the command line
const filePath = process.argv[3]


request(url, (error, response, body) => {
  if(error){
  console.log('error:', error); // Print the error if one occurred
  }

  fs.writeFile(filePath, body, (error) => {
    if (error){ 
      console.log("Error in writing, check file path") 
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ./index.html`)
      }
  } //Print error if the there is an erorr
    )
  
  
});
