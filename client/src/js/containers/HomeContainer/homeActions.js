import axios from 'axios';

export function getSearchData(search) {




   return {
       type: 'GET_SEARCH_DATA',
       payload:
       axios
           .get('api/restaurants')
           .then(response => {
               var restaurantData = response.data

               return restaurantData;
           })
           .catch(error => {
               const errorSearch = {
                   error: true
               }

               return errorSearch;
           })

       
   }
}
