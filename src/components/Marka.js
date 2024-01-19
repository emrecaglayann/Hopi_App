import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity,Linking  } from 'react-native';

const BrandsScreen = () => {
  
  const brands = [
    {
        id: "NiyatTaşı",
        logo: 'https://cdn3.hipicon.com/images/Designers/2019/10/31/1572511358_1.jpeg',
        coordinate: {
            latitude: 38.465758578304964, 
            longitude: 27.118021267698214,
          },
    },
    {
      id:"49.com.tr",
      logo: 'https://scontent.fyei6-3.fna.fbcdn.net/v/t39.30808-6/309621702_439870258244649_1755030365126962886_n.png?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=hkEJn5P4EZIAX9hHSJA&_nc_ht=scontent.fyei6-3.fna&oh=00_AfA84xlyxBE5aE7EaSBEuo-XkiguxOe5aKedUSYCoy6UlA&oe=65AFABB6',
      coordinate: {
        latitude: 41.068121306323455,
        longitude:  28.994857126436656,
      },
    },
    {
      id:"4E Care",
      logo: 'https://hopi.com.tr/_next/image?url=https%3A%2F%2Fimg-hopi.mncdn.com%2Fshop%2Favatar%2FLOGO_PDF_page-0001_512x512.jpg&w=384&q=75',
      coordinate: {
        latitude: 40.98420934578718, 
        longitude: 29.163852757671155,
      },
    },
    {
      id:"A-101",  
      logo: 'https://ww2.freelogovectors.net/wp-content/uploads/2020/07/a101-logo.png?lossy=1&ssl=1',
      coordinate: {
        latitude: 41.03022481048918, 
        longitude: 29.046958916793127,
      },
    },
    {
      id:"Kiğılı",
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Ki%C4%9F%C4%B1l%C4%B1_logo.png/1200px-Ki%C4%9F%C4%B1l%C4%B1_logo.png',
      coordinate: {
        latitude: 40.8741644195128,
        longitude: 29.399287489889122,
      },
    },
    {
      id:"Accract",
      logo: 'https://accofashion.de/wp-content/uploads/2022/11/accofashion-altinyildiz-classics.jpg',
      coordinate: {
        latitude: 38.20988007776805, 
        longitude: 27.245447396523296,
      },
    },
    {
      id:7,
      logo: 'https://scontent.fsaw1-13.fna.fbcdn.net/v/t39.30808-6/277790171_380139640785006_7871328746545795361_n.png?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Yw60Cfsgt_8AX_TZsU4&_nc_ht=scontent.fsaw1-13.fna&oh=00_AfB1gCQTl9mQagxoitYTlwjf0kKKMJ81sZ6ZM-U9e3O7ow&oe=65794962',
      coordinate: {
        latitude: 40.9806105639577, 
        longitude:29.072708881366747,
      },
      
    },
    {
      id:8,
      logo: 'https://cdn.shopify.com/s/files/1/0266/2773/5605/files/Accouchee_Logo.png?height=628&pad_color=faf9f6&v=1614315059&width=1200',
      coordinate: {
        latitude: 40.98049907639764, 
        longitude: 29.072755265250787,
      },
    },
    {
      id:9,
      logo: 'https://img-hopi.mncdn.com/shop/avatar/AFIFE_LOGO.jpg',
      coordinate: {
        latitude: 40.905438, 
        longitude: 29.230083,
      },
    },
    {
      id:10,
      logo: 'https://www.terracity.com.tr/fileadmin/user_upload/GLOBAL/brand_stores/logos/zara.jpg',
      coordinate: {
        latitude: 41.05731738094635, 
        longitude: 28.993208019096304,
      },
    },
    {
      id:11,
      logo: 'https://www.aichalavanta.com/img/setting/aicha-lavanta_21.01.2021_0d42280.png',
      coordinate: {
        latitude: 41.729893694310945, 
        longitude: 27.223112067837768,
      },
    },
    {
      id:12,
      logo: 'https://aikaconcept.com.tr/wp-content/uploads/2023/09/AIKA-Concept-Logo.png',
      coordinate: {
        latitude: 41.11403132570943, 
        longitude: 29.020912255424832,
      },
    },
    // Add more brands if needed
  ];

  const handleBrandPress = (brand) => {
    const { latitude, longitude } = brand.coordinate;
    const url = `geo:${latitude},${longitude}`;
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        return Linking.openURL(url);
      } else {
        console.warn(`Harita uygulaması desteklenmiyor.`);
      }
    }).catch((err) => console.error('An error occurred', err));
  };

  return (
    <ScrollView style={styles.container}>
      {chunkArray(brands, 3).map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((brand, index) => (
            <TouchableOpacity
              key={index}
              style={styles.brandContainer}
              onPress={() => handleBrandPress(brand)}
            >
              <Image style={styles.brandImage} source={{ uri: brand.logo }} />
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  brandContainer: {
    alignItems: 'center',
    backgroundColor: "#FAFAFA",
    padding: 8,
    borderRadius: 10,
  },
  brandImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});

export default BrandsScreen;