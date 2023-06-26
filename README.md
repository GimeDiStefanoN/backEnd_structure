<h1 align="center"> Express MVC Structure </h1>

Backend MVC structure, using

<a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="50" height="50"/> </a>

<a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="50" height="50"/> </a> 

## Quick Start

1. Clone the git repository into your new project folder and install required dependencies by running the command below:
   
   1.1 cloning git repository into `backend` folder
   
       
        git clone --depth=1 https://github.com/GimeDiStefanoN/backEnd_structure.git backend
       
   1.2 install project dependencies
      ```
        cd backend && npm install
      ```
3. Run your application

   
## Project Structure

```
├── src                                 # contains controller files
  ├── controllers                       # contains controller files
  ├── models                            # contains models
  ├── routes                            # contains routers with mounted controller methods
  ├── data                              # contains json files
  ├── services                          # contains routers with mounted controller methods
  └── server.js                         # express server
├── assets                              # contains views and script files
 ├── scripts                            # contains frontend script files
 ├── views                              # contains ejs template files
    ├── layouts                             # contains meta
    ├── partials                            # contains header, footer
    ├── pages                               # contains pages
├── public                              # contains public assets
  ├── css                               # contains style files
  ├── img                               # contains images, documents, videos
  └── favicon.ico                       # favicon file
├── index.js                            # main entrypoint
```
