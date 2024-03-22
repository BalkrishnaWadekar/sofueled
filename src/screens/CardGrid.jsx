import React from 'react'
import Footer from '../components/Footer'
import Images from './Images'

const CardGrid = () => {
    return <>
        <div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div className="card p-2 border my-3 h-100">
                            <h3>Gaming accessories</h3>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="row">
                                    <div className="col-sm-6 p-4">
                                        <div className="d-block">
                                            <img src="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg" height='80' alt="keyborad" />
                                            <span>Headsets</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 p-4">
                                        <div className="d-block">
                                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg" height='80' alt="keyborad" />
                                            <span>Keyboards</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 p-4">
                                        <div className="d-block">
                                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg" height='80' alt="keyborad" />
                                            <span>Computer mice</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 p-4">
                                        <div className="d-block">
                                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg" height='80' alt="keyborad" />
                                            <span>Furniture</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <span><a href="">see more</a></span>

                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div className="card p-2 border my-3 h-100">
                            <h3>Toys Under $30</h3>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469244_2584128_379x304_1X_en_US._SY304_CB609318944_.jpg" alt="" />
                            <span><a href="">see more</a></span>
                        </div>

                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div className="card p-2 border my-3 h-100">
                            <h3>Gaming accessories</h3>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="row">
                                    <div className="col-sm-6 p-4">
                                        <div className="d-block">
                                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg" height='80' alt="keyborad" />
                                            <span>Headphone</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 p-4">
                                        <div className="d-block">
                                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg" height='80' alt="keyborad" />
                                            <span>Headphone</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 p-4">
                                        <div className="d-block">
                                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg" height='80' alt="keyborad" />
                                            <span>Headphone</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 p-4">
                                        <div className="d-block">
                                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg" height='80' alt="keyborad" />
                                            <span>Headphone</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <span><a href="">see more</a></span>

                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div className="d-block">
                            <div className="card my-3 p-3 h-100">
                                <h3>Sign in for the best experience</h3>
                                <button className='btn btn-warning'>Sign in Securely</button>
                            </div>
                            <div className='d-flex justify-content-center align-align-items-center'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg" alt="dilevery" />
                            </div>
                        </div>
                    </div>
                    {/* second grid start */}
                    <div class="col-lg-3 col-md-6">
                        <div className="card p-2 border my-5 h-100">
                            <h3>Top Deal</h3>
                            <img src="https://m.media-amazon.com/images/I/31gbbFPjYUL._AC_SY230_.jpg" alt="" />
                            <span><a href="">see more</a></span>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">

                        <div className="card p-2 border my-5 h-100">
                            <h3>Refresh your space</h3>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="row">
                                    <div className="col-sm-6 p-4">
                                        <div className="d-block">
                                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg" height='80' alt="keyborad" />
                                            <span>Dining</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 p-4">
                                        <div className="d-block">
                                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg" height='80' alt="keyborad" />
                                            <span>Home</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 p-4">
                                        <div className="d-block">
                                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg" height='80' alt="keyborad" />
                                            <span>Kitchen</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 p-4">
                                        <div className="d-block">
                                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg" height='80' alt="keyborad" />
                                            <span>Health and Beauty</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <span><a href="">see more</a></span>

                        </div>

                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div className="card p-2 border my-5 h-100">
                            <h3>Electronics</h3>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg" alt="" />
                            <span><a href="">see more</a></span>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div className="card p-2 border my-5 h-100">
                            <h3>Computers & Accessories</h3>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg" alt="" />
                            <span><a href="">see more</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default CardGrid