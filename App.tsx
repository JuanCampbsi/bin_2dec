import React from 'react';
import Home from './src/pages'
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Home />
    </>
  );
}

