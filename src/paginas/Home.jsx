import React from 'react'
import Banner from '../components/Banner'
import ListaCategorias from '../components/ListaCategorias'
import ListaPost from '../components/ListaPost'

const Home = () => {

  return (
    <main>
      <ListaCategorias />
      <ListaPost url={'/posts'} />

    </main>
  )
}

export default Home
