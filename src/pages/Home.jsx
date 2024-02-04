import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SearchForm } from '../components/SearchForm'
import { CardContainer } from '../components/CardContainer'

export default function Home() {
  return (
    <div>
      <Header />
      <SearchForm />
      <CardContainer />
      <Footer />
    </div>
  )
}
