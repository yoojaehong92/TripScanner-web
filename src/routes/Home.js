import React from 'react';
import SearchForm from '../components/search-form'
import S from 'shorti'

const Home = () => {
  return (
    <div style={S('p-20 pt-65')}>
      <SearchForm/>
      <span>Home</span>
    </div>
  );
};

export default Home;
