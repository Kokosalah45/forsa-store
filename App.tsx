import Index from "./components/Index";
import { LanguageProvider } from "./contexts/LanguageContext";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

import "./i18n/i18n";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <LanguageProvider>
          <Index />
        </LanguageProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
