import React from 'react'
import { Navbar, Head, MakeCaffee, Products, NewsLetter } from '../../components'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Head />
            <MakeCaffee />
            <Products />
            <NewsLetter />
        </div>
    )
}

export default Home