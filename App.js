import React from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import categorias from './data/index';
import Header from './components/Header';

const assai = () => {
  const categoriasData = categorias;

  return (
    <View style={styles.container}>
      <Header />
      <Image
        source={{ uri: 'https://www.assai.com.br/sites/all/themes/assai_2024/styles/custom/ofertas-2024/images/banner.webp' }}
        style={styles.banner}
      />

      <ScrollView style={styles.scrollView}>

        <Text style={styles.tituloCategoria}>VEJA NOSSOS PRODUTOS:</Text>

        {categoriasData.map((categoria, index) => (
          <View key={index} style={styles.containerCategoria}>
            <Text style={styles.tituloCategoria}>{categoria.nome}</Text>
            
            <ScrollView horizontal>
              <View style={styles.containerCards}>
                {categoria.cards.map((card, cardIndex) => (
                  <TouchableOpacity key={cardIndex} style={styles.card}>
                    <Image source={{ uri: card.imagem }} style={styles.imagemCard} />
                    <Text style={styles.nomeProduto}>{card.nome}</Text>
                    <Text style={styles.precoProduto}>{card.preco}</Text>
                    <Text style={styles.descricaoProduto}>{card.descricao}</Text>
                    <Text style={styles.quantidadeProduto}>Quantidade disponível: {card.quantidade}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  banner: {
    width: '80%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 10,
    alignSelf: 'center',
  },
  scrollView: {
    flex: 1,
  },
  containerCategoria: {
    alignItems: 'center',
    marginBottom: 20,
  },
  tituloCategoria: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#f65c08',
    alignSelf: 'center',
  },
  containerCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  card: {
    width: 250,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    marginRight: 10,
  },
  imagemCard: {
       height: 220,
       resizeMode: 'cover',
       borderRadius: 5,
       marginBottom: 5,
  },
  nomeProduto: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  precoProduto: {
    marginBottom: 5,
    color: '#32CD32',
  },
  descricaoProduto: {
    marginBottom: 5,
  },
  quantidadeProduto: {
    fontStyle: 'italic',
  },
});

export default assai;
