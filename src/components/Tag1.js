import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import "../../i18n";


const Tag1 = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t("Markalar")}</Text>
    </View>
  );
};


export default Tag1;

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    marginBottom: 30,
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
