# SF Movies

> Create a service that shows on a map where movies have been filmed in San Francisco. The user should be able to filter the view using autocompletion search.
> The data is available on [DataSF](http://www.datasf.org/): [Film Locations](https://data.sfgov.org/Arts-Culture-and-Recreation-/Film-Locations-in-San-Francisco/yitu-d5am).

### Back-end
API docs/static view.
_criteria_:
- document/write tests for API to be used by other services  

### Front-end
- focus on making interface as polished as possible.

### Assumptions/Todo
- generate job/worker to fetch and save first pass for db.  
- use mapbox/odm2tileserver mapserver for map tiles.  
##### Nice to have  
- gather external sources to expand db schema to be filtered (director/actor/location etc);  


## Review criteria
> How we review

> Your application will be reviewed by at least three of our engineers. We do take into consideration your experience level.

> We value quality over feature-completeness. It is fine to leave things aside provided you call them out in your project's README. The goal of this code sample is to help us identify what you consider production-ready code. You should consider this code ready for final review with your colleague, i.e. this would be the last step before deploying to production.

> The aspects of your code we will assess include:

>
- Architecture: how clean is the separation between the front-end and the back-end?
- Clarity: does the README clearly and concisely explains the problem and solution? Are technical tradeoffs explained?
- Correctness: does the application do what was asked? If there is anything missing, does the README explain why it is missing?
- Code quality: is the code simple, easy to understand, and maintainable? Are there any code smells or other red flags? Does object-oriented code follows principles such as the single responsibility principle? Is the coding style consistent with the language's guidelines? Is it consistent throughout the codebase?
- Security: are there any obvious vulnerability?
- Testing: how thorough are the automated tests? Will they be difficult to change if the requirements of the application were to change? Are there some unit and some integration tests?
We're not looking for full coverage (given time constraint) but just trying to get a feel for your testing skills.
- UX: is the web interface understandable and pleasing to use? Is the API intuitive?
Technical choices: do choices of libraries, databases, architecture etc. seem appropriate for the chosen application?
### Bonus point (those items are optional):
- Scalability: will technical choices scale well? If not, is there a discussion of those choices in the README?
- Production-readiness: does the code include monitoring? logging? proper error handling?

#### inspired by
- [fs](https://github.com/dsp-uber/sfmovies)  
- [fs](https://github.com/maxijb/uber)  
- [fs](https://github.com/aaandrew/Uber-Coding-Challenge)  
- [api](https://github.com/gurgelrenan/sf-movies)  

Author
Denis Tsoi <denistsoi@gmail.com>
