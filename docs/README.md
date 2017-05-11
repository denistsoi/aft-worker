### Technological choices

- Frontend  
  /mapbox-gl (have familiarity and vector based zooming is nice, have done previous work i.e. `dt-maps`)  
  /react (done vue/ng before and wanted to spend time on this)  

- Backend  
  /express  
  /mongoose  
  /request  
  /async  

- Build-Tool  
  /webpack2

- Other tools  
  /eslint  
  /jslint   
  /vscode | sublime (depending on whether if laptop hangs)  


### Technical thought processes

1. Since my back ground is more focused on the frontend, I wanted to spend more time getting more confident with using mongoose and saving data to a mongodb instance. In my previous roles, the infrastructure setup and backend has usually been achieved by someone more experienced than myself. (hence another reason why I want to expose myself to such challenges)

2. Since my weakness was interfacing with a db, I wanted to allocate more time in learning/reading and feeling more settled in getting started with a solid backend. A second of this time was spend reading and understanding other candidates repositories (hence some inspiration from [aandrew](https://github.com/aaandrew/Uber-Coding-Challenge).

3. Another reasoning with trying separate the backend from the front, was to have an attempt at separating my backend as a api service - which my frontend could attempt to request updated locations based on their query. (even though a static geojson version could be deployed to the front).

## Why did this not go to plan?

### initial assumptions

I have beleved that this would have been a fairly straight forward challenge - (i.e. since I had recently finished a project mapping locations to a Mapbox UI).

The main focus that I spend during the first week, (as it was a holiday as well) was spending it reading about how to get started with Mongo/Redis and React. 

In hindsight, I should have spent the first weekend prototyping, but thought none-the-wiser as it was a public holiday as well.

### First road block

the data from the source SF Movie did not contain the location data that I needed. 

### Second road block

throttling of mapbox geocoding api (it makes sense, but also did not factor that into development time) - request hangs after 600 requests (tried to use settimeout, but need a better solution)

### Third road block

I did not anticipate problems in deploying a static frontend by using `next`/`now`. (my thinking here was that I could have used React either on the their deployment tooling and decouple it from backend, possibly by separating the UI vs the worker/db);

I could've used something like `netlify` as well - but i didn't spend enough time feeling confident enough to implement that. (other choices could have been aws or digital ocean `dokku` - but again, pushing to `heroku` seemed the quickest);

### Take aways

Spent way too long `researching`/`reading` on tutorials and not enough time putting knowledge down into code. (i.e. fear of failure vs competancy `imposter syndrome`);

I feel confident that i learned something, but wished that I had spent more time rather than feeling apprehensive of approaching the problem of not knowing.