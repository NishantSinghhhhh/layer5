import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/Navigation";
import ImageHubPage from "../../sections/Image-Hub";
import Footer from "../../sections/Footer";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";

const ImageHub = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Image Hub" description="Image Hub is a sample application written to run on Consul for exploring WebAssembly modules used as Envoy filters." />
      <Navigation />
      <ImageHubPage />
      <Footer/>
    </Layout>
  </ThemeProvider>
);
export default ImageHub;