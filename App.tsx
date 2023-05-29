import Index from "./components/Index";
import { LanguageProvider } from "./contexts/LanguageContext";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

import "./i18n/i18n";

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <LanguageProvider>
        <Index />
      </LanguageProvider>
    </SafeAreaProvider>
  );
}
