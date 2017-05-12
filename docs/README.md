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

1. Since my background is more on frontend, I wanted to spend more time getting more confident with using mongoose and saving data to a mongodb instance. In my previous roles, the infrastructure setup and backend has usually been achieved by someone more experienced than myself. (hence another reason why I want to expose myself to such challenges).

2. Since my weakness was interfacing with a db, I wanted to allocate more time in learning/reading and feeling more settled in getting started with a solid backend. A second of this time was spend reading and understanding other candidates repositories (hence some inspiration from [aandrew](https://github.com/aaandrew/Uber-Coding-Challenge).

3. Another reasoning with trying separate the backend from the front, was to have an attempt at separating my backend as a api service - which my frontend could attempt to request updated locations based on their query. (even though a static geojson version could be deployed to the front).

----

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

-----

### FAQs

#### 1. Why did you initially create aft-front/aft-worker only to have aft-worker have a frontend?

Initially, I had wanted to create a `api service` that would periodically fetch from the SF movies (and other data sources) to separate my frontend from the back. The reasoning behind this was that, I wanted to eventually leverage static site deployment (`now`/`netlify`) or perhaps `s3` to push my frontend application across differernt locations. Due to time constraints I wasn't able to achieve this.

Secondly, by separating my backend, I could be sure eventually that I could scale across nodes as well as with load (say with `AWS`) if the service required. I could have looked into Docker/Kubernetes on orchestration. But again, `time constaints`.

So to answer the question: I decided to keep the front and backend logic together for demonstation purposes.

#### 2. Why did you use Mapbox instead of Google Maps/Leaflet?

Firstly, we're using a tile server at `https://osm2vectortiles.tileserver.com/v2.json` - which is a open street map tile server. Why did I not use say, Mapbox tiles? - because eventually, I would have to pay to get the styles/tiles etc. This way I could make sure I wasn't exceeding my mapbox quota.

For google maps, I decided against it because, with vector tile mapping, you get a smoother transition when zooming and panning between levels and locations. [vector vs raster](http://gisgeography.com/spatial-data-types-vector-raster/)

Another reason is that, by pointing to a osm tileserver, if required, I could spin up a osm tile server hosted by myself from [openmaptiles](https://openmaptiles.org/docs/)

#### 3. Ok so I see where you were going with this... how come it's incomplete?

Well - as I mentioned before, I underestimated the task at hand (simply assumng that the data fetching/manipulation was going to be within GEOJSON format, and that locations were geocoded). 

Secondly, I spend too much time researching on areas that were unfamilar to my experience and learning from other people's code. 

Admittantly, it looks bad/sloppy, but I did want to only show what I was attempting (or at the very least, confident to explain what my thought processes were, rather than say, copy pasting without explanation). I think the main motivation was to have a sense of accountability - and to be able to document what each section of the application attempts to achieve.

#### 4. Why are there no tests?

Time constraints... :(.

#### 5. Why are there so many Promises?

Firstly, I wanted to attempt to use async/await - but certain things, like request, doesn't return Promises (_I know that I could use `request-promise`, but i didn't want to introduce another complexity by adding another library).

I didn't manage to find time within the week to finish this.

### author
Denis Tsoi <denistsoi@gmail.com>