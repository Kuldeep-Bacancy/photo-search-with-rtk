import './App.css'
import PhotoCards from './components/PhotoCards'
import SearchForm from './components/SearchForm'

function App() {

  return (
    <>
      <div className="App">
        <div className="container">
          <h1 className="title">Photo Search</h1>
          <SearchForm />
          <PhotoCards />
        </div>
      </div>
    </>
  )
}

export default App

