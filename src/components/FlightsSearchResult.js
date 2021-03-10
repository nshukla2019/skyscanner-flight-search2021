import React from 'react';
import './Flights.css';
import Moment from 'moment';
import { DataGrid } from '@material-ui/data-grid';
import clsx from 'clsx';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';


const styles = theme => ({
    root: {
        '& .super-app.positive': {
            backgroundColor: '#c4eafd',
            color: 'black',
            fontWeight: '600',
            font: 'Times New Roman',
            //borderColor: '#046b9f'
        }
    }
});

class Flights extends React.Component {


    constructor(props) {
        super(props);

        this.render = this.render.bind(this);
        this.matchID = this.matchID.bind(this);
        this.fixDate = this.fixDate.bind(this);
        
        this.state = {
            sortDirection: 'desc',
            columns: undefined,
            classes: undefined
        }

       
    }
    

    matchID(id, places) {
        if(id === places[0].PlaceId) {
            return places[0].Name;
        }
        else {
            return places[1].Name;
        }
        
    }

    fixDate(date) {
        date = Moment(date).format('MM-DD-YYYY');
        return date;
    }
        

    render() { 

        var quotes = this.props.flightsReponse.Quotes;
        var currencies = this.props.flightsReponse.Currencies
        var places = this.props.flightsReponse.Places
        var carriers = this.props.flightsReponse.Carriers
        
        // console.log("quotes:"+ JSON.stringify(quotes));
        // console.log("currencies:"+ JSON.stringify(currencies));
        // console.log("places:"+ JSON.stringify(places));

        var minimumPrice = 0;
        
        //console.log("before for loop");

        for(var i=0; i<quotes.length; i++) {
            if (i === 0) {
             minimumPrice = quotes[i].MinPrice;
            }
             quotes[i].originName = this.matchID(quotes[i].OutboundLeg.OriginId,places);
             quotes[i].destinationName = this.matchID(quotes[i].OutboundLeg.DestinationId,places);
             quotes[i].id = i;
             quotes[i].DepartureDate = this.fixDate(quotes[i].OutboundLeg.DepartureDate);
             if (minimumPrice > quotes[i].MinPrice) {
                 minimumPrice = quotes[i].MinPrice;
            }
            // put if statement to catch error if no carriers are found to match
            // how to handle more than 1 carrier
            quotes[i].Airline = carriers.find(carrier => carrier.CarrierId = quotes[i].OutboundLeg.CarrierIds).Name;
            quotes[i].Currency = currencies[0].Symbol;
            
            // testing hello 

            console.log("hello");
         }
         console.log("after for loop");
    
         this.state.columns = [
            { field: 'Airline', headerName: 'Airline', width: 150 },
            { field: 'originName', headerName: 'Origin', width: 250},
            { field: 'destinationName', headerName: 'Destination', width: 250 },
            { field: 'DepartureDate', headerName: 'Departure Date', width: 150 },
            { field: 'Currency', headerName: 'Cur.', width: 90 },
            { field: 'MinPrice', headerName: 'Price', width: 141, cellClassName: (params) =>
            clsx('super-app', 
            {
              positive: params.value <= minimumPrice
            }
            )}
       ];

        const { classes } = this.props;

        return(
           <div className={classes.root} style={{ display: 'flex', height: 350, paddingTop: 30, paddingLeft: 100, paddingRight: 100, label: "dataGrid"}}>
            <div style={{ flexGrow: 1 }}>
            <DataGrid rows={quotes} columns={this.state.columns} style={{textAlign: "center"}} hideFooterPagination={false} autoHeight={true} disableColumnResize={true} disableColumnMenu disableSelectionOnClick pageSize={5} />
            </div>
            </div>
        )
    }



}

Flights.propTypes = {
    classes: PropTypes.object.isRequired,
  };


export default withStyles(styles)(Flights);
