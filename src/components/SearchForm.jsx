import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { searchPhotos } from '../features/PhotoSearchSlice'

function SearchForm() {
  const [searchText, setSearchText] = useState('')
  const dispatch = useDispatch()

  return (
    <>
      <form className="form" onSubmit={
        (e) => {
          e.preventDefault();
          dispatch(searchPhotos(searchText))
        }
      }>
        <label className="label" htmlFor="query">
          {" "}
          📷
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try "dog" or "apple"`}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
    </>
  )
}

export default SearchForm