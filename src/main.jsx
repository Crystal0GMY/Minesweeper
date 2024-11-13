import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import HomePage from './HomePage'
import Game from './Game'
import Rules from './Rules'
import { GameProvider } from "./GameContext";

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomePage />
  },
  {
    path: '/game/:difficulty',
    element: <GameProvider>
      <Game />
    </GameProvider>
  },
  {
    path: '/rules',
    element: <Rules />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
