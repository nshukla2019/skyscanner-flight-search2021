import React from 'react';
import './FlightInfo.css';
import FlightsSearchResult from './FlightsSearchResult';
import TextField from '@material-ui/core/TextField';  
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';

class FlightSearch extends React.Component {

constructor(props) {

    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.render = this.render.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
   

    this.state = {
        date: new Date(),
        originplace: "",
        destinationplace: "",
        outboundpartialdate: "",
        inboundpartialdate: "",
        currency: "USD",
        flightsReponse: undefined,
        root: {
            flexGrow: 1,
        },
        paper: {
            textAlign: 'center',
        },
        currencyResponse: undefined
       
    };

}

componentDidMount() {

    const currentCurrencyState = this;

        async function getCurrencyAPI() {

            const request=async()=>{
                const response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/currencies", {
                    "method": "GET",
                    "headers": {
                    "x-rapidapi-key": "94873677e7msh2a304b836ad44f7p1ea0c0jsn6845e118a98a",
                    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
                }});

                const responseBody= (await response.text());
                const jsonPlaces=JSON.parse(responseBody);
                //console.log("response :"+ JSON.stringify(jsonPlaces));
                return jsonPlaces;
              }
                const res =  request()
                return res;
            }


            async function wrapper(){

                let json = (await getCurrencyAPI()); 

                //let json = JSON.parse('[{"Code": "AUD", "Symbol": "$","ThousandsSeparator": ",","DecimalSeparator": ".","SymbolOnLeft": true,"SpaceBetweenAmountAndSymbol": false,"RoundingCoefficient": 0,"DecimalDigits": 2}, {"Code": "USD","Symbol": "$","ThousandsSeparator": ",","DecimalSeparator": ".","SymbolOnLeft": true,"SpaceBetweenAmountAndSymbol": false,"RoundingCoefficient": 0,"DecimalDigits": 2}]');
          
                //currentCurrencyState.setState({currencyResponse: responseObject.Currencies}); 

                console.log("json" + json);

                currentCurrencyState.setState({currencyResponse: json.Currencies});
            }

            wrapper();
            
            
           // console.log("got the json data:" + JSON.stringify(responseObject));

    getCurrencyAPI();
    //console.log("got the data:" + this.state.currencyResponse);  
    //console.log(this.state.currencyArray);  

}


handleSubmit(event){
    const currentStateFlight = this; // need to cache the current state of "this" before fetchMyAPI is called

    async function fetchMyFlightsAPI(currency, queryString) {

        //currency = "USD"; // we set currency to USD because api call for currencies is giving back a promise object
        const reqOptions = {
            method: 'GET',
            headers: {
                "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                "useQueryString": true
            }
        }
       
        let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/" + currency + "/en-US/" + queryString, reqOptions);
        response = await response.json();
        

        console.log("fetched the data" + JSON.stringify(response));

        // we have the response from the API call which returns a JSON Object
        // destructure this Object and push contents of it into an arr[]
        // pass the arr[] to Flights component class
        // use .map on arr[] to go through each object

        currentStateFlight.setState({flightsReponse: response});  // updates flightsResponse to reponse
       
        //console.log("updated" + response); // prints "passed [Object object]
    }

    fetchMyFlightsAPI(this.state.currency, this.state.originplace + "/" + this.state.destinationplace + "/" + this.state.outboundpartialdate + "?inboundpartialdate=" + this.state.inboundpartialdate);

    //alert("origin place:"+ this.state.originplace + this.state.destinationplace + this.state.outboundpartialdate + this.state.inboundpartialdate);
    event.preventDefault();


}

// does this work?
handleChange(event){
    this.setState({currency: event.target.value});
    console.log("clicked");
}




render() { 

    return(
    <div>
        <div id="divForm" className=""//{this.state.root}
        >
            <Grid container spacing={3}>
                <Grid item xs>
                <Paper className=""//{this.state.paper}
                >
                    <form className="user-input" onSubmit={this.handleSubmit}>
                               
                               <label htmlFor="queryInput">Leaving From:</label>

                                <TextField
                                   className="TextField-without-border-radius"
                                   id="outlined-basic" 
                                   placeholder= 'Airport Code(BOS)'
                                   label="" 
                                   size="small"
                                   type=""
                                   variant="outlined"
                                   margin='none'
                                   value={this.state.originplace}
                                   onChange={e => this.setState({originplace: e.target.value})} required
                                   InputLabelProps={{
                                       shrink: true,
                                   }} 
                               /> 
                      
                               <label htmlFor="queryInput">Going To:</label>

                                <TextField
                                   className="TextField-without-border-radius"
                                   id="outlined-basic" 
                                   placeholder= 'Airport Code(JFK)'
                                   label="" 
                                   size="small"
                                   type=""
                                   variant="outlined"
                                   margin='none'
                                   value={this.state.destinationplace}
                                   onChange={e => this.setState({destinationplace: e.target.value})} required
                                   InputLabelProps={{
                                       shrink: true,
                                   }}
                                   
                               /> 

                               <label htmlFor="queryInput">Departure Date:</label>
                               
                               <TextField
                                   className="TextField-without-border-radius"
                                   id="date"
                                   label=""
                                   size="small"
                                   type="date"
                                   variant="outlined"
                                   margin='none'
                                   //defaultValue={this.state.date}
                                   value={this.state.outboundpartialdate}
                                   onChange={e => this.setState({outboundpartialdate: e.target.value})} required
                                   InputLabelProps={{
                                       shrink: true,
                                   }}
                                   
                               />
                             

                               <label htmlFor="queryInput">Returning Date:</label>
                              
                               <TextField
                                   className="TextField-without-border-radius"
                                   id="date"
                                   label=""
                                   size="small"
                                   type="date"
                                   margin='none'
                                   variant="outlined"
                                   //defaultValue={this.state.inboundpartialdate}
                                   value={this.state.inboundpartialdate}
                                   onChange={e => this.setState({inboundpartialdate: e.target.value})} required
                                   InputLabelProps={{
                                       shrink: true,
                                   }}
                               />
                               

                               <label htmlFor="queryInput">Currency:</label>
                              
                               <TextField
                                   className="TextField-without-border-radius"
                                   id="currencyDropDown"
                                   select 
                                   label=""
                                   size="small"
                                   //defaultValue="USD"
                                   margin='none'
                                   //placeholder='USD'
                                   variant="outlined"
                                   value={this.state.currency ? this.state.currency : ""}
                                   //onChange={e => this.setState({currency: e.target.value})} required
                                   onChange={this.handleChange} required
                                  //onSelect={value => this.setState({ currency : value }) }
                                   InputLabelProps={{
                                       shrink: true,
                                   }}
                               >
                            {
                                this.state.currencyResponse != null ?
                                this.state.currencyResponse.map((currencyItem) => (
                               <MenuItem key={currencyItem.Code} value={currencyItem.Code}>
                               {currencyItem.Code}
                               </MenuItem>
                               )) : console.log("currencies are not available yet!")
                            }

                           
                            </TextField>
                            <Grid id="searchGrid" item xs>
                            <Paper className=""
                            >
                               <button className="search">Search</button>
                            </Paper>
                            </Grid>
                        </form>
                </Paper>
                </Grid>
            </Grid>

        </div>

        <div> 
            {this.state.flightsReponse &&  <FlightsSearchResult flightsReponse={this.state.flightsReponse}/>} 
        </div>                     
      
           
    </div>

    )
}

}

export default FlightSearch;
