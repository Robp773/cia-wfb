import data from "./factbook";
import { formatKey } from "./formating-helpers";

// get list of available countries
export function getCountryList() {
  return Object.keys(data.countries).map(key => {
    return formatKey(key);
  });
}

// 
export function filterData(data) {  
  let countryList = Object.keys(data);
  for (let i = 0; i < countryList.length; i++) {
    // console.log("---------");
    // console.log(countryList[i]);
    // console.log(data[countryList[i]].data);
    // console.log(data[countryList[i]])
  }
}
