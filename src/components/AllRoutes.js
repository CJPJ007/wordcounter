import React from 'react'
import { Route, Routes } from 'react-router'
import WordArea from './WordArea'
import NorrisJoke from './NorrisJoke'
import PageNotFound from './PageNotFound'

export default function AllRoutes() {
  return (
    <Routes>
      <Route path={"/"} element={<WordArea/>} />
      <Route path={"/joke"} element={<NorrisJoke/>} />
      <Route path={"*"} element={<PageNotFound/>} />
    </Routes>
  )
}
