import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carousel from './Carousel'
import CardGrid from './CardGrid'
import Images from './Images'

export default function Home() {
    return <>
        <Carousel />
        <CardGrid />
        <Images />
    </>
}
