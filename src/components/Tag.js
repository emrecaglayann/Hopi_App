import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next';
import "../../i18n";


const Tag = () => {
  const { t } = useTranslation();
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t("Hepsi Senin için")}</Text>
    </View>
    
  )
}

export default Tag

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 30,
  },
  text: {
    fontSize: 18, 
    marginLeft: 10,
    fontWeight: 'bold',
  },
});
