## **lift**-weights
The main goal of this project was to create an open source full-stack project and learn new languages and tools: react, node/express, jest, import API data, and more.

The client-side was built with react, react-semanticUI and was bootstrapped with facebook's [Create React App](https://github.com/facebook/create-react-app) -- more information is available in [react\_bootstrap.md](/server/client/react_bootstrap.md). The backend is composed with node using an express framework and MySQL database. The various tutorials and resources used in this project are available in the [resources](#resources) section below and other open source tools such as the *wger* workout API and *Semantic UI React* were invaluable in getting this project up and running more efficiently.

This app tracks and supports an individual's weight-lifting goals, allowing for customized workout routines of various exercises, body and exercise measurements, basic account management, and a long-term goal of scalability, providing statistics, and encouraging results.



---

#### [environment setup](#setup)

* check if `nvm` (node.js version manager) and `nodejs` are installed  
`nvm -v`  
`node -v`  

* if versions are not available, then install `nvm` (code source: [nvm repo](https://github.com/nvm-sh/nvm))   
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash`  

* view the latest versions for `nvm `  
`nvm ls-remote`  

* install latest stable version of node (`v10.16.0 Latest LTS: Dudnium` was used for this project)  
`nvm install 10.16.0 ` 

* Close terminal and open a new one to ensure changes are applied. Check that you have the correct version  
`node -v  `

---

#### [build](#build)

* clone the repository   
`git clone git@github.com:mkduer/weight-lifting-app.git ` 
* Install dependencies for backend (using server path: `weight-lifting/server`):  
  `cd weight-lifting/server `  
  `npm install`
* Install dependencies for frontend (using client path: `weight-lifting/server/client`):  
  `cd client `  
  `npm install`
* run the app in the browser from the server-side (using server path: `weight-lifting/server`)  
  `npm run dev`  
* your browser should open with the application OR you can visit `localhost:3000`

---
