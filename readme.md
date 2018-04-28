# Assignment #7 - Final

Charles Mateer cmateer@g.harvard.edu

Github:
https://github.com/HarvardDCENode/assignment7-final-cwmat

Live application:
http://67.205.177.107:8085



The description of this assignment can be found in Canvas at [Assignment #7](https://canvas.harvard.edu/courses/35096/assignments/208557) (Spring 2018)

## Description of Project
The webpage hows a list view pulling from a mock data service.  Each attribute of the data are shown in columns of the main table.  THis is accomplished via the Angular ngFor directive.  Class binding is used to change the color of hover/selected rows.  

Upon clicking a row, the list component will pass data to the map component whcih listensd for changes, clears the current mapview (if markers exist) and adds a marker using the clicked feature's lat/long value.


## Structure
### Express
- Express application structure as described in Assignment #5 (start scripts, view/route/model directories, mongo/mongoose, a data service class, etc)
  - 
- A REST API for all four CRUD operations, plus any other APIs your app may need (if any)
  - 
- You application may use Web/HTML routes as well, if you like.
  - 
- You should serve your Angular application using a static route in Express. In other words, your server code will be delivering both your Angular code and your Express app.
  - 
### Angular
- Angular application structure as described in Assignment #6.
  - 
- A router with at least two views/pages.
  - 
- At least two CRUD operations must be supported via Angular using your REST API. You may support all four operations in Angular, or do fewer in Angular and the others through the Express Web/HTML side. Duplication is fine (both Angular and Web/HTML methods), if that makes sense for your application.
  - 
- Your REST API access should be contained in a data service class.
  - 


## Functionality
- Your application should provide the ability to do all four CRUD operations that lets user(s) manage information stored in the database. The information can be whatever is 
relevant to your site - information about people, pictures, sports teams, universities, blog posts, or whatever you've chosen as the purpose of your project. Your application should support being able to retrieve a resource(s), create a new resource, update existing ones, and delete them (all four CRUD operations).
  - 
- At least two types of CRUD operations must be supported in your Angular application.
  - 
- A beautiful visual design is not a requirement for this assignment, but your application should have a clear, easy-to-use interface.
  - 
- Your application should do something. This doesn't mean it has to be a completed, polished application ready in every detail to deploy to the public. It does mean that it should not simply be a collection of short, trivial, independent examples of each function.
  - 




## TODO
- Implement HTTP access via data service
- Add route views (envisioning a couple tabs that lets the user switch between CRUD views and the map)
- Add forms for CRUD
- Add mapping view