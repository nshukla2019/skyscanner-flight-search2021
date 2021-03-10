export async function fetchAirports(location) {

    fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?query=" + location, {
          "method": "GET",
          "headers": {
            "x-rapidapi-key": "94873677e7msh2a304b836ad44f7p1ea0c0jsn6845e118a98a",
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
          }
        })
        .then(response => {
          console.log(response);
          return response.json();
        })
        .catch(err => {
          console.error(err);
        });
        }



  export function getAirports(location) {
  
    let jsonPlaces=JSON.parse('[{"PlaceId":"BOS-sky","PlaceName":"Boston","CountryId":"US-sky","RegionId":"MA","CityId":"BOS-sky","CountryName":"United States"},{"PlaceId":"NYCA-sky","PlaceName":"New York","CountryId":"US-sky","RegionId":"NY","CityId":"NYCA-sky","CountryName":"United States"},{"PlaceId":"JFK-sky","PlaceName":"New York John F. Kennedy","CountryId":"US-sky","RegionId":"NY","CityId":"NYCA-sky","CountryName":"United States"},{"PlaceId":"EWR-sky","PlaceName":"New York Newark","CountryId":"US-sky","RegionId":"NJ","CityId":"NYCA-sky","CountryName":"United States"},{"PlaceId":"LGA-sky","PlaceName":"New York LaGuardia","CountryId":"US-sky","RegionId":"NY","CityId":"NYCA-sky","CountryName":"United States"},{"PlaceId":"SWF-sky","PlaceName":"Stewart International","CountryId":"US-sky","RegionId":"NY","CityId":"NYCA-sky","CountryName":"United States"},{"PlaceId":"NWS-sky","PlaceName":"New York Pier 11 / Wall St. SPB","CountryId":"US-sky","RegionId":"NY","CityId":"NYCA-sky","CountryName":"United States"},{"PlaceId":"BUF-sky","PlaceName":"Buffalo Niagara","CountryId":"US-sky","RegionId":"NY","CityId":"BUFA-sky","CountryName":"United States"},{"PlaceId":"ALB-sky","PlaceName":"Albany","CountryId":"US-sky","RegionId":"NY","CityId":"ALBA-sky","CountryName":"United States"},{"PlaceId":"ROC-sky","PlaceName":"Rochester","CountryId":"US-sky","RegionId":"NY","CityId":"ROCA-sky","CountryName":"United States"},{"PlaceId":"SYR-sky","PlaceName":"Syracuse","CountryId":"US-sky","RegionId":"NY","CityId":"SYRA-sky","CountryName":"United States"}]')
    let jsonPlaces1=  fetchAirports(location);
    console.log("jsonPlaces1:" + jsonPlaces1)
    return  jsonPlaces;
  
  }
  
  export function matchLocation(state, value) {
    console.log(" matchLocation state:"+ JSON.stringify(state));
    console.log("matchLocation value:"+ value);
    return (
      state.PlaceName.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
      state.PlaceId.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }
  
  