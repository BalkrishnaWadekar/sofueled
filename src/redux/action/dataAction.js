import axios from "axios"
import { GET_DATA_FAIL, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "../constant/dataConstants"

export const getData = () => async dispatch => {
    try {

        dispatch({ type: GET_DATA_REQUEST })

        const { data } = await axios.get("https://jsonplaceholder.typicode.com/photos")
        console.log(data);

        dispatch({ type: GET_DATA_SUCCESS, payload: data })

    } catch (error) {

        dispatch({ type: GET_DATA_FAIL, payload: error })

    }
}