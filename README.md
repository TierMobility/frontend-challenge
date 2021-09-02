
# **Coding Challenge** 🦅  
  
# What you have to do  
_“As a user I want to shorten my long url and be able to copy it into clipboard to post it on a social platform (e.g. Twitter).”_  
  
## Challenge  description
  
In this challenge, we’re asking you to create two services which one serves as the backend in python or nodejs and the other one a frontend written using React library.   
  
## Challenge  acceptance Criteria

**Backend should be able to:**
 -  Receive a URL and return a unique short-form URL for the domain "tier.app".
 -  Receive a short URL and return the original long URL. (For the sake of simplicity, this does not have to be a redirect from the short URL to the long one. For the real thing, it would work that way; here, just do whatever satisfies the requirement.)    
 -  Be fairly certain that these functions work as expected.

**Frontend should be able to:**
 - Send a request to the backend to get shortened! 
 - Display the shortned URL received from the backend!
 - In case of an error response from the backend, displaying the error!
 
Bonus points:  
 - `Running backend and frontend in seperate docker container using docker-compose`
 - `Using django/fastAPI for the backend`
 - `Validate user data`  
 - `Create a test suite`  
 - `Create and use reusable components`  
 - `Create your own CSS theme (clean & responsive layout)`  
  
**Notes:**
 - Please do not spend more than **4 hours** on this, don’t worry if you don’t finish everything. 
 - Please send us a link to your project on GitHub.
 - Please use this repository as the template for your frontend service - you can follow the following instructions to setup the frontend template.
 
### Installation & setup  
  
Run `yarn install` to install dependancies, then copy `.env.dist` to `.env`.  
  
### Available Scripts  
  
In the project directory, you can run:  
  
#### `yarn start`  
  
Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.  
  
The page will reload if you make edits.  
You will also see any lint errors in the console.  
  
#### `yarn lint`  
  
Check and fix based on linting rules

Good luck and have fun!  
