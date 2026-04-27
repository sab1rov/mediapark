import { Route, Routes } from 'react-router'
import { Footer, Header } from './components'
import { routes } from './utils/routes'

function App() {
  return (
    <>
      <Header />
      <Routes>
        {routes.map((item) => (
          <Route path={item.path} element={item.element} key={item.path} />
        ))}
      </Routes>
      <Footer />
    </>
  )
}

export default App
