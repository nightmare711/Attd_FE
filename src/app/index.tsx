import React from "react";
import MainRoute from "src/modules/MainRoute";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider, ThemedGlobalStyle } from "src/theme";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import Navbar from "src/components/Navbar";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { store } from "./store";
import { Provider } from "react-redux";
import { UseWalletProvider } from "use-wallet";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import { connectors } from "src/configs/Connect/Configs.rpc";
import "animate.css/animate.min.css";
import "react-toastify/dist/ReactToastify.css";
const queryClient = new QueryClient();

const App = () => {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <ThemeProvider>
          <ThemedGlobalStyle />
          <QueryClientProvider client={queryClient}>
            <UseWalletProvider autoConnect={true} connectors={connectors}>
              <Router>
                <ScrollToTop>
                  <Header />
                  <Navbar />
                  <MainRoute />
                  <Footer />
                </ScrollToTop>
                <ToastContainer />
              </Router>
            </UseWalletProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </Provider>
    </HelmetProvider>
  );
};

export default App;
