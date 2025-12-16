import { ChatProvider } from "./Chats/ChatProvider";
import { MenuProvider } from "./Menu/MenuProvider";
import { ThemeProvider } from "./ThemeContext";



const providers = [
  // if we need to pass props 
  // ({ children }) => <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>,
  ThemeProvider,
  MenuProvider,
  ChatProvider
  // DashboardProvider,
];

export default function AppProviders({ children }) {
  return providers.reduceRight(
    (acc, Provider) => <Provider>{acc}</Provider>,
    children
  );
}
