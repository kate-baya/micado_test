Micado Technical Interview Challenge - Full-Stack Developer

(To run this application, clone the project onto your computer, install all dependencies, and enter npm run build (or 'dev') in your terminal)

Although I am just starting out as a developer, I was given a technical challenge to test not only my understanding, but also my ability to problem solve and learn. This challenge was a fantasitc opportunity to further develop my coding skills.

I was asked to put together a modern, dynamic, end-to-end web app that utilises REST API calls to visualise data. This is a dynamic front-end that can be modified by the user through simple actions like drag-and-drop.

FRONTEND COMPONENTS
1. Your front-end should provide

  a. two to four summary metrics at the top of the layout,
  
  b. followed with a visualisation that shows the breakdown of the metrics you
      have chosen at the previous bullet point,
     
  c. a date picker as a global filter to allow slicing the data in date ranges.
  
2. Front-end should allow drag-and-drop of visualisation components i.e., the user should be      able to change the location of visualisations or metrics.

4. Visualisation components should be resizable.

6. Your UI should follow a responsive design principle.

8. Your app should be able to run on all major internet browsers like Chrome, Edge
(Chromium), Firefox and Safari.

BACKEND COMPONENTS
1. The data should reside in a database.

3. Your back-end can be containerised, or, setup locally residing next to the front-end.

5. Feel free to use any optimisation you see fit for providing a responsive front-end.

DATA
I was given a sample dataset from Stats NZ website in a CSV format which I imported using Postgres. I used Knex to connect to my database and return relevant data. 

I used:
 - React / Redux
 - Node.js
 - PostreSQL
 - D3
 - React Beautiful dnd
 - Express
 - Knex
 - Bulma

I managed to create a dashboard with three summary metrics, and two visualisations of the data. I also added a table that displays an overview of all of the data. The data is filtered by subseries (Active, Deceased, Tests by Day etc) and date. 

Each container and component can be dragged and dropped, and I am currently working on making the components resizable. 

I am still working on making the UI responsive, as I am learning more about svg elements and how to use them within my projects. 

This application runs on all major internet browsers. 

