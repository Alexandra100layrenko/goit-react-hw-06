import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import s from './SearchBox.module.css'


const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  }


  return (
    <form className={s.searchBlock}>
      <label>
        <span>Find contacts by name</span>
        <input 
          type='text' 
          className={s.search} 
          value={filter}
          onChange={handleChange}/>
      </label>
    </form>
  )
}

export default SearchBox;
