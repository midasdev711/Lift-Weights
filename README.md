## **lift**-weights
An open source project to create a full-stack app for weight-lifting exercises, workouts, stats, and results. The client-side of this project was bootstrapped with facebook's [Create React App](https://github.com/facebook/create-react-app) -- more information is available in [react\_bootstrap.md](/server/client/react_bootstrap.md).   

Various tutorials and resources were used to learn the stack -- ***front-end*** react.js and reactstrap, ***backend***: node.js with express framework and MySQL database; the sources are listed below in the [resources](#resources) section.



---

#### [environment setup](#setup)

* check if `nvm` (nodejs version manager) and `nodejs` are installed  
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

#### [general deadlines](#deadlines)

- [x] **June 30th (Sunday)**: Create MySQL Database and setup login page (research ReactStrap as an alternative to Bootstrap, which would counter the lighter-weight React model).
- [x] **July 1st (Monday)**: Create backend with Node.js (using Express framework). Run React and Express Servers using concurrently package.
- [x] **July 4th (Thursday)**: Create DB connection. Login with user and check for membership in database -- handle success (redirect to profile page) and failure (error message on backend). 
- [x] **July 5th (Friday)**: Setup registration page and handle success (registering user and redirecting to profile page) and failure (error message on backend).
- [x] **July 7th (Sunday)**: Research route-handling with front-end server and implement client-side of login/registration pages.
- [ ] **July 9th (Tuesday)**: Start user profile page and include links to secondary pages (e.g. workouts, exercises, measurements).  #28
- [ ] **July 10th (Wednesday)**: Continue improving user profile page and template out secondary pages (should be re-using components). #28
- [ ] **July 12th (Friday)**: Research React testing (possibly with Jest) and consider coverage for current code. Also research pulling API data from wger for exercises. #29, #30
- [ ] **July 13th (Saturday)**: Create more tests, as needed before moving on and populate API data. #29, #30
- [ ] **July 16th (Tuesday)**: PROTOTYPE of project (to demonstrate viability). Update README.md with testing details.
- [ ] **July 18th (Thursday)**: Create at least one “example data” for each section and use these same components to complete the user profile page. #30
- [ ] **July 30th (Tuesday)**: MVP (minimum viable product) that compiles and is ready for demoing.
- [ ] **August 1st (Thursday)**: Focus on adding more data, testing and adding tests through components. 
- [ ] **August 8th (Thursday)**: Focus on scalability and, given extra time, add statistical models to represent data.
- [ ] **August 12th (Monday)**: Prep presentation details and any documentation (final updates for README.md)

#### [extra time](#extras)
- [ ] setup user authentication
- [ ] allow registration with email 
- [ ] handle password reset with email
- [ ] add statistical models using highchart.js or equivalent  
- [ ] make things prettier (i.e. acceptable for a presentation)
- [ ] convert development code into production code (i.e. the front-end server would be copmiled and the prodcution code would only use one backend server)
---

#### [resources](#resources)

[1] Facebook Open Source, "React.js Tutorial," 2019. [Online]. Available: [https://reactjs.org/tutorial/tutorial.html](https://reactjs.org/tutorial/tutorial.html).  

[2] C. S. Roldán, *React Cookbook*. Birmingham, UK: Pakt Publishing Ltd, 2018.  

[3] S. Grider, "Modern React with Redux [2019 Update]," May 2019. [Online]. Available: [https://www.udemy.com/react-redux/](https://www.udemy.com/react-redux/).  

[4] S. Grider, "Node with React: Fullstack Web," June 2019. [Online]. Available: [https://www.udemy.com/node-with-react-fullstack-web-development/](https://www.udemy.com/node-with-react-fullstack-web-development/).  

---

#### [license](#license)

Copyright © 2019 Michelle Duer  
Licensed as an Open Source Project under the "MIT License". The license can be read [here](LICENSE-MIT).