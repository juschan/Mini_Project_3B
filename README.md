# Mini_Project_3B - API dot You
This project is a RESTful API service providing resume data in json format.
It is hosted on heroku [here](https://obscure-mesa-68731.herokuapp.com/). The landing page provides more information on various routes. 


###Technology
The technology used is primarily Node.js with a MongoDB backend, hosted on mLab. 

Mocha/Chai/Supertest testing framework was used for testing routes.


###How it works

Current available routes are:

GET /all  -  This include the entire resume data.

GET /summary - This includes name, tagline and (personal) statement.

GET /links - This include links to various github repos and heroku website.

GET /projects - This includes details to projects.

GET /skills - A listing of various programming languages.

