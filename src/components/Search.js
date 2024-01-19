import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import "../../i18n";



const MyComponent = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  
  return (
      
      <Searchbar
        placeholder={t("Marka, kampanya ve ürün ara")}
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{ marginTop: 15, marginBottom: 5 }}
      />
  );
};



export default MyComponent;


