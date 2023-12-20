import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity, Modal, useColorScheme } from 'react-native';
import { WebView } from 'react-native-webview';

const API_URL = 'https://newsapi.org/v2/everything?q=apple&from=2023-12-19&to=2023-12-19&sortBy=popularity&apiKey={"enter your api key here"}';

const TabOneScreen = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const [news, setNews] = useState<any[]>([]);
  const [webViewVisible, setWebViewVisible] = useState(false);
  const [webViewUrl, setWebViewUrl] = useState('');

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch(API_URL);
      const contentType = response.headers.get('content-type');

      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();

        if (data.status === 'ok') {
          setNews(data.articles);
        } else {
          console.error('Error fetching news:', data);
        }
      } else {
        console.error('Non-JSON response received:', contentType);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const openNewsLink = (url: string) => {
    setWebViewUrl(url);
    setWebViewVisible(true);
  };

  const closeWebView = () => {
    setWebViewVisible(false);
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkModeContainer]}>
      <ScrollView style={styles.scrollView}>
        <Text style={[styles.title, isDarkMode && styles.darkModeTitle]}>Latest News</Text>
        {news.map((article, index) => (
          <TouchableOpacity
            key={index}
            style={styles.articleContainer}
            onPress={() => openNewsLink(article.url)}
          >
            <Image style={styles.articleImage} source={{ uri: article.urlToImage }} />
            <View style={styles.textContainer}>
              <Text style={[styles.articleTitle, isDarkMode && styles.darkModeText]}>
                {article.title}
              </Text>
              <Text style={[styles.articleDescription, isDarkMode && styles.darkModeText]}>
                {article.description}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal visible={webViewVisible} animationType="slide">
        <View style={{ flex: 1 }}>
          <WebView source={{ uri: webViewUrl }} style={{ flex: 1 }} />
          <TouchableOpacity onPress={closeWebView} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  articleContainer: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  articleImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  textContainer: {
    padding: 12,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  articleDescription: {
    fontSize: 16,
    color: '#555',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
  },
  
  darkModeContainer: {
    backgroundColor: '#000',
  },
  darkModeTitle: {
    color: '#fff',
  },
  darkModeText: {
    color: '#000',
  },
});

export default TabOneScreen;
