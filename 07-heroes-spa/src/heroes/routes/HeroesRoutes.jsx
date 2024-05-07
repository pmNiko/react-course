import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "@/ui/components"
import { DcPage, Hero, MarvelPage, SearchHero } from "@heroes/pages"

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">
          <Routes>
              <Route path='marvel' element={<MarvelPage />} />
              <Route path='dc' element={<DcPage />} />  
              <Route path='search' element={<SearchHero />} />  
              <Route path='hero/:id' element={<Hero />} />  
                            
              <Route path='/*' element={<Navigate to='/marvel' />} />
          </Routes>
        </div>
    </>
  )
}
