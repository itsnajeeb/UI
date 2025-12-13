import { ChatProvider } from "./Chats/ChatProvider";
import { MenuProvider } from "./Menu/MenuProvider";

const providers = [
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
