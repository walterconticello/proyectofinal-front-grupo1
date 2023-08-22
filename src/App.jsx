

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/common/Layout'
import Home from './pages/Home/Home'
import List from './pages/list/List'

function App() {


  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/complejos" element={<List />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
