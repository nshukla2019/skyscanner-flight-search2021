**READ ME**

This React app takes in user input in the form of flight search information (Origin, Destination, Departure Date, Arrival Date, and Currency type), fetches data from the SkyScanner API, and dynamically populates a table with the related flight information.

This app is hosted on: https://nshukla2019.github.io/skyscanner-flight-search2021/

GitHub Repo: https://github.com/nshukla2019/skyscanner-flight-search2021

_**Deliverables (all have been met):** _
1) let users view their flight options between two destinations for specific dates
2) allows users to select their currency preference when searching for flights
3) use intuitive UI principles to highlight or call out the cheapest flights for a user running a search
	
Bonus:		
1) when all flight options are listed, allow the user to sort the results by the cheapest to highest priced and vice versa


_**Packages and Components Used:**_

1) Material UI
	1) Data Grid component to hold the API data based on user’s input
		1) allows user to **sort on each column** by clicking a column title
	2) Grid component to hold the form which the user inputs the Origin, Destination, Departure Date, Arrival Date, and Currency Type
	3) TextField Component as the input fields for the Arrival and Departure Date		
		1) allows the user to choose the date using a date picker and user does not need to type it in manually
		2) default value is also set today’s date
	
2) Moment
	1) Moment .format() function to format the date 
		1) the departure date filed in the API data concatenated the departure date with the time of departure
		2) reformatted the date to splice the time off the string and keep date in the MM-DD-YYYY


_**API Calls:**_

1) Called the SkyScanner Quotes API to get the JSON data after user fills out the form completely and hits search
	1) JSON data is set as the state of an already defined variable in the FlightSearch Component
	2) this variable is passed as props to the FlightsSearchResult component which is where the **Data Grid is populated and displayed with the correct results**

2) Called the SkyScanner Currencies API in componentDidMount() to get the list of currencies SkyScanner uses
	1) the list of currencies is converted into JSON format and then it is set as the state of an already defined variable in the FlightSearch component
	2) by using the “select” feature in the TextField component provided by Material UI, a drop down is created 
		1) “select” is passed the JSON object which holds the list of currencies and maps through the list to **populate the currency drop down**

_**Other Key Implementations:**_

1) for loop in FlightsSearchResult
	1) after extracting each field in the Quotes JSON object, the “Quotes” field is traversed through using a for loop
		1) for each “Quote” object in the JSON data, the data from each of the following fields is extracted and added as a new field at the end of the original JSON data
			1) originName, destinationName, id, DepartureDate, Airline, and Currency
		2) this is done so the newly formatted data is all in one array which is passed as the rows to the Data Grid component
	2) this for loop also keeps track of the minPrice as it compares each price to the next one, replacing the minPrice variable is the current price is lower than minPrice

2) **highlighting minimum price**
	1) after iterating through the data and finding the minPrice, it is passed as parameters to a field in the minPrice column which calls CSS to highlight that cell blue

3) Populating the Origin and Departure Places
	1) created a matchID function which takes in the “places” array from the Quotes JSON data to and an id as parameters to match the place ID to the origin and destination ID
		1) if the given id matches the places[0].id, then this the origin so it returns places[0].Name
		2) else, it is the destination so it returns places[1].Name

I had a great experience coding this React App and I cannot wait to keep expanding my React skills!!
