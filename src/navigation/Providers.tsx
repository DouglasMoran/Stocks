import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Provider as StoreProvider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import { Auth0Provider } from 'react-native-auth0';

import { AUTH_DOMAIN, AUTH_CLIENT_ID } from '@env';

import store from '@store/index';

import Routes from '@navigation/Routes';

import { customDefaultTheme } from '@commons/themes';

const Providers = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={customDefaultTheme}>
        <GestureHandlerRootView>
          <StoreProvider store={store}>
            <Auth0Provider domain={AUTH_DOMAIN} clientId={AUTH_CLIENT_ID}>
              <BottomSheetModalProvider>
                <Routes />
              </BottomSheetModalProvider>
            </Auth0Provider>
          </StoreProvider>
        </GestureHandlerRootView>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default Providers;
