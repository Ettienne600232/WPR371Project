# Community Portal Project

## Overview

Starter boilerplate for a Node.js + Express + EJS website.

## To access it the project from github.

1. clone the repository.
2. in github desktop, you open the file in vs code.

## Instructions

1. Run `npm install` to install dependencies.
2. Use `npm run dev` to start the development server with nodemon.
3. Add your own route handlers and middleware as needed.
   This is a test change for the pull request.

## Overview

This is a dynamic Community Portal website developed using **Node.js**, **Express.js**, and **EJS**. It includes five main pages—Home, About, Events, Contact, and Thank You—rendered using EJS templates with Express routing. The site allows users to view event details and submit contact forms dynamically.

## Technologies Used

Technologies Used

- Node.js (v18+)
- Express.js (v4+)
- EJS (v3+)
- nodemon
- CSS / Bootstrap 5 (optional)
- Git & GitHub

## Team Members and Roles

| Name                          | Role                      |
| ----------------------------- | ------------------------- |
| **Ettienne Janse Van Vuuren** | Team Lead                 |
| **Michael Ricahrd Lan Mon**   | Backend Developer         |
| **Lesedi Mmathapelo Sedibe**  | Designer                  |
| **Lethabo Kimberleigh Khobo** | Frontend Developer & Docs |

### Clone the repository

```bash
git clone https://github.com/Ettienne600232/WPR371Project.git
cd WPR371Project
```

## Folder Information

# Data - Contains all the data that is imported to the rest of the page

about.js - This contains all the information and rols of the team
contact.json - This file is used to save all the responses from the contact page
events.js - This contains all the information of the events

# Public

css - contains the css styling for the webpage
images - contains all the images for the webpage

# Routes

pageRoutes.js - this file contains all the routs for all the pages

# Views/Pages

about.ejs - Webpage that shows the teams information
contact.ejs - Contact form to submit a ticket
events.ejs - Contains all the upcoming events
home.ejs - Welcomes the user to the community portal and shows upcoming events
thabkyou.ejs - The users gets a thank you message after sending a ticket

# Partials

footer - The footer of the page with the trade mark
header - Contains the navbar fot the seperate pages

# app.js

Contains all the server information for the website
