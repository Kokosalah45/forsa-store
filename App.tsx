import Index from "./components/Index";
import { LanguageProvider } from "./contexts/LanguageContext";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

import i18n from "./i18n/i18n";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { I18nextProvider } from "react-i18next";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <LanguageProvider>
          <I18nextProvider i18n={i18n} defaultNS={"translation"}>
            <Index />
          </I18nextProvider>
        </LanguageProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
