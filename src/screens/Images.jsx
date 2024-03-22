import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../redux/action/dataAction'

export default function Images() {
    const { data } = useSelector(state => state.allData)
    console.log(data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getData())
    }, [])

    return <>
        <div className='container-fluid mt-5'>

            <div className="row">
                {
                    data?.slice(0, 20)?.map((item, index) => <div key={index} className="col-sm-3 p-4">
                        <div className="d-block">
                            <img src={item.thumbnailUrl} height='300px' alt="keyborad" />
                            <span>{item.title}</span>
                        </div>
                    </div>)
                }
            </div>
        </div>
    </>
}