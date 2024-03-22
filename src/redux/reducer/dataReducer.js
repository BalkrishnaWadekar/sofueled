import { GET_DATA_FAIL, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "../constant/dataConstants"


export const dataReducer = (state = { data: [] }, { type, payload }) => {
    switch (type) {

        case GET_DATA_REQUEST: return { loading: true }

        case GET_DATA_SUCCESS: return { loading: false, data: payload }

        case GET_DATA_FAIL: return { loading: false, error: payload }

        default: return state
    }
}
