import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { PaperProvider } from 'react-native-paper';

import Routes from '@navigation/Routes';

import { customDefaultTheme } from '@commons/themes';

const Providers = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={customDefaultTheme}>
        <GestureHandlerRootView>
          <BottomSheetModalProvider>
            <Routes />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default Providers;
