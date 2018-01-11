import axios from 'axios';

export function getSearchData(search) {



    return {
        type: 'GET_SEARCH_DATA',
        payload: search
        
    }
}
