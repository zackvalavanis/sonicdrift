import './App.css'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Main } from './Main/Main'

function App() {

  const router = createBrowserRouter([
    {
      element: (
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      ),
      children: [
        { path: '/', element: <Main /> }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
