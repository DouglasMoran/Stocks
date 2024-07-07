import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Provider as StoreProvider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';

import store from '@store/index';

import Routes from '@navigation/Routes';

import { customDefaultTheme } from '@commons/themes';

const Providers = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={customDefaultTheme}>
        <GestureHandlerRootView>
          <StoreProvider store={store}>
            <BottomSheetModalProvider>
              <Routes />
            </BottomSheetModalProvider>
          </StoreProvider>
        </GestureHandlerRootView>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default Providers;
