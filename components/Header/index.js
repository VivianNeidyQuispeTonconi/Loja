import React from 'react';
import { View, Image, TextInput } from 'react-native';
import styles from './style'; 

const Header = () => {
  return (
    <View style={styles.header}>

      <Image
        source={{ uri: 'https://mais.opovo.com.br/_midias/jpg/2024/02/20/760x570/1_logo_assai_2024-25616659.jpg' }}
        style={styles.logo}
      />

      <TextInput
        placeholder="Pesquisar..."
        style={styles.barraPesquisa}
      />
      
    </View>
  );
};

export default Header;
