# React App to Search and Display Vehicle Info by VIN

## Description

Webpage loads input field that allows a user to search for vehicle details by VIN number

After sending query to the NHTSA vPIC API ([vpic.nhtsa.dot.gov/api/](https://vpic.nhtsa.dot.gov/api/)) the page displays the YEAR, MAKE, MODEL, and BODY STYLE of the vehicle along with six other vehicle features.

Along with the results of the search, the page displays three videos of the vehicle using a Youtube search API (https://www.npmjs.com/package/youtube-search-api).

## Requires two extensions when using Chrome:

* Moesif Origin & CORS Changer (https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc?hl=en-US)

* Allow CORS: Access-Control-Allow-Origin (https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf/related?hl=en)

## To execute:
Run 'npm start' in ReactApp/react-app, then open http://localhost:3000 to view it in your browser.
