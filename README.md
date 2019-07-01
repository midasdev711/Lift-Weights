## **lift**-weights

An open source project to create a full-stack app for weight-lifting exercises, workouts, stats, and results. This project was bootstrapped with facebook's [Create React App](https://github.com/facebook/create-react-app) -- more information is available in [react\_bootstrap.md](react_bootstrap.md).  



---

#### environment setup

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

---

### build

* clone the repository   
`git clone git@github.com:mkduer/weight-lifting-app.git ` 
* run the app in the browser  
  `cd weight-lifting `  
  `npm run dev`  
* your browser should open with the app OR you can visit `localhost:3000'  

---

#### planning

- [x] **June 30th (Sunday)**: Create MySQL Database and setup login page (research ReactStrap as an alternative to Bootstrap, which would counter the lighter-weight React model).
- [ ] **July 4th (Thursday)**: Create backend with Node.js (using Express framework). Connect backend to frontend by running the app successfully from login, registration to logout. Write tests for database/login.
- [ ] **July 5th (Friday)**: Start user profile page. 
- [ ] **July 7th (Sunday)**: Create templates for main sections. Link from user profile page.
- [ ] **July 9th (Tuesday)**: PROTOTYPE of project (to demonstrate viability).
- [ ] **July 18th (Thursday)**: Create at least one “example data” for each section and use these same components to complete the user profile page.
- [ ] **July 30th (Tuesday)**: MVP (minimum viable product) that compiles and is ready for demoing.
- [ ] **August 1st (Thursday)**: Focus on adding more data, testing and adding tests through components. 
- [ ] **August 8th (Thursday)**: Focus on scalability and statistical models of data (possibly using highchart.js or an equivalent).
- [ ] **August 12th (Monday)**: Prep presentation details and any documentation.  

---

#### resources

[1] Facebook Open Source, "React.js Tutorial," 2019. [Online]. Available: [https://reactjs.org/tutorial/tutorial.html](https://reactjs.org/tutorial/tutorial.html)  
[2] C. S. Roldán, *React Cookbook*. Birmingham, UK: Pakt Publishing Ltd, 2018.  

[3] S. Grider, "Modern React with Redux [2019 Update]," May 2019. [Online]. Available: [https://www.udemy.com/react-redux/](https://www.udemy.com/react-redux/).

[4] S. Grider, "Node with React: Fullstack Web," June 2019. [Online]. Available: [https://www.udemy.com/node-with-react-fullstack-web-development/](https://www.udemy.com/node-with-react-fullstack-web-development/).

---

#### License

Copyright © 2019 Michelle Duer
Licensed as an Open Source Project under the "MIT License" 
