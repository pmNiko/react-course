
import { Router, Routes } from "react-router-dom"
import {DcPage, MarvelPage} from '@/heroes/pages/DcPage'

export const AppRouter = () => {

  return (
    <>
        <Routes>
            <Router path='marvel' element={<MarvelPage />} />
            <Router path='dc' element={<DcPage />} />
            
            <Router path='login' element={<LoginPage />} />
        </Routes>
    </>
  )
}
