
import * as React from 'react';

import { Text,View,  } from 'react-native'
import { Searchbar } from 'react-native-paper';



export const Search = () =>{
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
}
