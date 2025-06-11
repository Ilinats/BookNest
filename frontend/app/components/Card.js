import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Card = ({
  title,
  subtitle,
  image,
  rating,
  onPress,
  variant = 'default',
  loading = false,
  style,
  children,
}) => {
  const renderContent = () => {
    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <View style={styles.loadingImage} />
          <View style={styles.loadingContent}>
            <View style={styles.loadingTitle} />
            <View style={styles.loadingSubtitle} />
          </View>
        </View>
      );
    }

    return (
      <>
        {image && (
          <Image
            source={{ uri: image }}
            style={[
              styles.image,
              variant === 'compact' && styles.compactImage,
            ]}
            resizeMode="cover"
          />
        )}
        <View style={styles.content}>
          {title && <Text style={styles.title}>{title}</Text>}
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          {rating !== undefined && (
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={16} color="#FFD700" />
              <Text style={styles.rating}>{rating.toFixed(1)}</Text>
            </View>
          )}
          {children}
        </View>
      </>
    );
  };

  const Container = onPress ? TouchableOpacity : View;

  return (
    <Container
      style={[
        styles.container,
        styles[variant],
        loading && styles.loading,
        style,
      ]}
      onPress={onPress}>
      {renderContent()}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  default: {
    marginBottom: 16,
  },
  compact: {
    flexDirection: 'row',
    padding: 12,
  },
  loading: {
    opacity: 0.7,
  },
  image: {
    width: '100%',
    height: 200,
  },
  compactImage: {
    width: 80,
    height: 120,
    marginRight: 12,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  loadingContainer: {
    flexDirection: 'row',
    padding: 12,
  },
  loadingImage: {
    width: 80,
    height: 120,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
  loadingContent: {
    flex: 1,
    marginLeft: 12,
  },
  loadingTitle: {
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginBottom: 8,
  },
  loadingSubtitle: {
    height: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    width: '60%',
  },
});

export default Card; 