import type { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import { QueryClientProvider, QueryClient } from "react-query";
import store from "../../redux";

interface ProviderType {
  children: React.ReactNode;
}
const ProviderConfig: FC<ProviderType> = ({ children }) => {
  const client = new QueryClient();
  return (
    <BrowserRouter>
      <ConfigProvider>
        <QueryClientProvider client={client}>
          <Provider store={store}>{children}</Provider>
        </QueryClientProvider>
      </ConfigProvider>
    </BrowserRouter>
  );
};

export default ProviderConfig;
