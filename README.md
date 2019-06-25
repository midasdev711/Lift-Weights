# **lift**-weights

An open source project to create a full-stack app for weight-lifting exercises, workouts, stats, and results. This project was bootstrapped with facebook's [Create React App](https://github.com/facebook/create-react-app) -- more information is available in [react\_bootstrap.md](react_bootstrap.md).

## environment setup

* check if `nvm` (nodejs version manager) and `nodejs` are installed  
`nvm -v`  
`node -v`  

* if versions are not available, then install `nvm` source: [nvm repo](https://github.com/nvm-sh/nvm)   
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash`  

* view the latest versions for `nvm `  
`nvm ls-remote`  

* install latest stable version of node (`v10.16.0 Latest LTS: Dudnium` was used for this project)  
`nvm install 10.16.0 ` 

* Close terminal and open a new one to ensure changes are applied. Check that you have the correct version  
`node -v  `


## build

* clone the repository   
`git clone git@github.com:mkduer/weight-lifting-app.git ` 
* run the app in the browser  
  `cd weight-lifting `  
  `npm start`  
* your browser should open with the app OR you can visit `localhost:3000'  


## planning
- [ ] **June 4th (Sunday)**: Create MySQL Database and setup login page
- [ ] **July 1st (Monday)**: Write tests for database and login
- [ ] **July 2nd (Tuesday)**: Start user profile page (research ReactStack as an alternative to Bootstrap, which is counter to the React model)
- [ ] **July 7th (Sunday)**: Create templates for main sections
- [ ] **July 9th (Tuesday)**: PROTOTYPE of project (to demonstrate viability)
- [ ] **July 18th (Thursday)**: Create at least one “example data” for each section and use these same components to complete the user profile page
- [ ] **July 30th (Tuesday)**: MVP (minimum viable product) that compiles and could be demoed
- [ ] **August 1st (Thursday)**: Tie together front and backend with Node.js (possibly do this sooner). Focus on adding more data, testing and adding tests through components. 
- [ ] **August 8th (Thursday)**: Focus on scalability and statistical models of data (possibly using highchart.js or an equivalent)
- [ ] **August 12th (Monday)**: Prep presentation details and any documentation

#### Copyright © 2019 Michelle Duer
Licensed as an Open Source Project under the "MIT License" 
