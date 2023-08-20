

import Layout from './components/common/Layout'
import Home from './pages/Home/Home'
import LoginRegister from './pages/LoginRegister/LoginRegister'

function App() {


  return (
    <>
      {/* 
        <Home />
      </Layout> */}
      <Layout>
        <LoginRegister />
      </Layout>
    </>
  )
}

export default App
