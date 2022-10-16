import { StatusBar } from 'expo-status-bar';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import * as SplashScreen from 'expo-splash-screen';
import styled, { ThemeProvider } from 'styled-components/native';
import { Landing } from './src/screens/Landing';
import { Login} from './src/screens/Login';
import { Register } from './src/screens/Register';

import { 
  useFonts, 
  Nunito_400Regular, 
  Nunito_700Bold,
  Nunito_500Medium
} from '@expo-google-fonts/nunito';

import theme from './src/theme/theme';
import { Home } from './src/screens/Home';
import { useCallback } from 'react';
import { AuthProvider } from './src/contexts/auth';

const Container = styled.View`
  flex: 1;
`;

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_400Regular, 
    Nunito_700Bold,
    Nunito_500Medium
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded)
    return null;

    
  return (
    <Container onLayout={onLayoutRootView}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <StatusBar style="light"/>
            <Register />
        </ThemeProvider>
      </AuthProvider>
    </Container>
  );
}
