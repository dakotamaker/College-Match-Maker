# Personalized College Match Maker
A simple React Web Application to match students with their best college fits based off of their own answers in a survey and 
data from the U.S. Department of education. Data populated in a DB by [this script](https://github.com/dakotamaker/college-data-collector). App available [here](https://collegematchmaker.co/).

## Disclaimer
The initial build of this application is for a grad school class, so the logic is not fully fleshed out, and should
not be taken as an absolute. The code isn't fully production-ready, but is a starting point.

## Env variables
- SCORECARD_API_KEY: The API key needed to query against the scorecard API

## Running Locally

Run `npm dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Credits
This project used a few different libraries and code snippets in the process of development,
and for that I want to say thank you and give credit to the following:

* [Recharts](https://github.com/recharts/recharts) - Used to create data charts on the knowledgebase page
* [Ant Design](https://ant.design/) - Used to render and easily make many of the elements in the survey and knowledge base pages
* [React.JS](https://reactjs.org/) - Frontend framework used that the entire application is built upon
* [Lodash](https://lodash.com/) - Used for different JavaScript utility throughout the application
* [React Spinner](https://mhnpd.github.io/react-loader-spinner/) - Used for the loading animation while the knowledgebase page information is being fetched
* [React Virtualized Select](https://github.com/bvaughn/react-virtualized-select)
+ [React Select Fast Filter Options](https://github.com/bvaughn/react-select-fast-filter-options) - Used together to create and make the knowledgebase page's search bar functional and stylish
* [React Collapsible](https://github.com/glennflanagan/react-collapsible#readme) - Used to display and hide the match details on the survey results page 
for a stylish way to display needed information

### Code snippets
There were two instances in the application in which direct code snippets were used to enhance the application's presentation.

1. `percentMatch.css` - Gradient classes provided by Stackoverflow user "VladSavitsky", and can be [found here](https://stackoverflow.com/a/44357038)
2. `PieChart.js` - The `renderActiveShape` function was directly used from their open-source [example docs](http://recharts.org/en-US/examples/CustomActiveShapePieChart), and the file structure was also inspired from their documentation as well