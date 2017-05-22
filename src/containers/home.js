import React from 'react';
import SearchForm from '../components/searchForm'
import S from 'shorti'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={S('p-20 pt-65')}>
        <SearchForm/>
      </div>
    );
  }
}


export default (Home);
