import React from 'react'
import { Routes, Route } from 'react-router-dom' 
import NavBar from '../components/ui/NavBar' 
import NotFound from '../components/ui/NotFound'
import Footer from '../components/ui/Footer'
//import Director from '../components/director/director'
import Director from '../components/director/director2'
import Genero from '../components/genero/genero'
import Media from '../components/media/media' 
import Productora from '../components/productora/productora' 
import Tipo from '../components/tipo/tipo' 

export default function AppRouter() {

    return (
        <div>
            <NavBar title={'Peliculas IUD'} />
            <main className='container'>
                <Routes >
                <Route path='/' element={<Director />} />
                    <Route path='/generos' element={<Genero />} />
                    <Route path='/medias' element={<Media />} />
                    <Route path='/productoras' element={<Productora />} />
                    <Route path='/tipos' element={<Tipo />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <br></br>
                <br></br>
                <Footer/>
            </main>
        </div>
    );
}