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

#### [general deadlines](#deadlines)

- [x] **June 30th**: Create MySQL Database and setup login page (research ReactStrap as an alternative to Bootstrap, which would counter the lighter-weight React model).
- [x] **July 1st**: Create backend with Node.js (using Express framework). Run React and Express Servers using concurrently package.
- [x] **July 4th (Thursday)**: Create DB connection. Login with user and check for membership in database -- handle success (redirect to profile page) and failure (error message on backend). 
- [x] **July 5th**: Setup registration page and handle success (registering user and redirecting to profile page) and failure (error message on backend).
- [x] **July 7th (Sunday)**: Research route-handling with front-end server and implement client-side of login/registration pages.
- [x] **July 9th**: Start user profile page and include links to secondary pages (e.g. workouts, exercises, measurements).
- [x] **July 10th**: Continue improving user profile page and template out secondary pages (should be re-using components).
- [x] **July 12th**: Research React testing (possibly with Jest) and consider coverage for current code. Also research pulling API data from wger for exercises.
- [x] **July 13th**: Populate API data using wger.
- [x] **July 17th**: Display list of exercises on exercise page based on exercise search. 
- [x] **July 23rd**: Dynamically update tab padding after results are returned
- [x] **July 29th**: Pass user-specific details through successful login to Profile page to allow for custom workouts to be created.
- [x] **August 4th**: Create a workout specific to the user (front-end)
- [x] **August 5th**: Design overall database. Create DB tables per design.
- [x] **August 10th**: Finish creating a workout (back-end). Display workout(s) on Workout Page.  
- [x] **August 11th (Sunday)**: MVP (minimum viable product) that compiles and is ready for demo-ing. 
- [x] **August 12th (Monday)**: Prep presentation details, screencasts, and update README.md for project submission.
- [x] **August 13-15th**: Presentations and Project Submission.  

#### [extra time](#extras)

**See Github Issues for current and planned next steps.**

- [ ] add statistical models using highchart.js or equivalent
- [ ] convert development code into production code (i.e. the front-end server would be compiled and the production code would only use one backend server)
- [ ] update to use React hooks
- [ ] better scaling for smaller (mobile) screens
- [ ] setup user authentication with Google OAuth (sequelize for MySQL or use Mongoose/Mongo)
- [ ] allow registration with email 
- [ ] handle password reset with email
---

#### [resources](#resources)

[1] Facebook Open Source, "React.js Tutorial," 2019. [Online]. Available: [https://reactjs.org/tutorial/tutorial.html](https://reactjs.org/tutorial/tutorial.html).  

[2] C. S. Roldán, *React Cookbook*. Birmingham, UK: Pakt Publishing Ltd, 2018.  

[3] S. Grider, "Modern React with Redux [2019 Update]," May 2019. [Online]. Available: [https://www.udemy.com/react-redux/](https://www.udemy.com/react-redux/).  

[4] S. Grider, "Node with React: Fullstack Web," June 2019. [Online]. Available: [https://www.udemy.com/node-with-react-fullstack-web-development/](https://www.udemy.com/node-with-react-fullstack-web-development/).  

[5] Semantic UI Community, "Semantic UI React: The official Semantic-UI-React integration". [Online]. Available: [https://react.semantic-ui.com/](https://react.semantic-ui.com/).

[6] wger | Workout Manager, "REST API". [Online]. https://wger.de/en/software/api.

---

#### [license](#license)

Copyright © 2019 Michelle Duer  
Licensed as an Open Source Project under the "MIT License" and can be read [here](LICENSE-MIT).