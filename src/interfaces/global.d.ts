import {
  KeyboardTypeOptions,
  StyleProp,
  ViewStyle,
  TextInputProps,
} from 'react-native';

import { FieldError } from 'react-hook-form';

declare global {
  interface ColorProp {
    color: AppColorsType;
  }

  interface SpacingProp {
    space: AppSpacingType;
  }

  interface FontProp {
    font: AppFontsType;
  }

  // Forms
  interface InpuTextProps extends TextInputProps {
    placeholder?: string;
    label?: string;
    type: KeyboardTypeOptions;
    value: string;
    isClearable?: boolean;
    isRequired?: boolean;
    haveError?: boolean;
    error?: string | FieldError;
    onClean?: () => void;
  }

  interface ButtonProps {
    label: string;
    type: ButtonType;
    icon?: React.ReactElement;
    iconRight?: boolean;
    color?: string;
    labelStyle?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    contentContainerStyle?: StyleProp<ViewStyle>;
    onPress: () => void;
  }

  interface AxiosResponseAPIProps<T> {
    errorCode: number;
    message: string;
    result: T | null;
  }

  interface RequestOptionsProps {
    url: string;
    body?: Record<string, any>;
    token?: string;
  }

  interface IDatumTrade {
    p: number;
    s: string;
    t: number;
    v: number;
  }

  interface IWatchTrade {
    data: Datum[];
    type: string;
  }

  interface IStockSymbol {
    currency: string;
    description: string;
    displaySymbol: string;
    figi: string;
    mic: string;
    symbol: string;
    type: string;
  }

  interface AppState {
    watchTrades: IDatumTrade[];
    previousPrices: { [symbol: string]: number };
    popularStockSymbols: IStockSymbol[];
  }
}

export {};
