import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { MantineProvider } from '@mantine/core';

import FeatureLeftSection from '../components/Homepage/FeatureLeftSection';
import FeatureRightSection from '../components/Homepage/FeatureRightSection';
import HeroBanner from '../components/homepage/HeroBanner';
import FAQ from '../components/Homepage/FAQ';
import Trust from '../components/Homepage/TrustBy';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HeroBanner />
      <FeatureLeftSection
        title="Non-intrusive programming model"
        description="The UI directly operates data, and data modifications directly drive UI updates, without any intermediate layers and concepts."
        image="/static/landing-page/001.gif"
      />
      <FeatureRightSection
        title="Multi-platforms"
        description="Consistent experience across multiple platforms, and easy to expand to new platforms."
        image="/static/landing-page/002.png"
      />
      <br />
      <FeatureLeftSection
        title="Declarative syntax and easy to interact"
        description="Ribir can interact well with Rust, making your code both a clear view description and a powerful logical expression."
        image="/static/landing-page/003.gif"
      />
      <FeatureRightSection
        title="Point-to-point view update strategy"
        description="Compile time generates updates logic of view, no general diff or patch algorithm."
        image="/static/landing-page/004.gif"
      />
      <br />
      <FeatureLeftSection
        title="Developer friendly"
        description={
          <ul>
            <li>
              Compose your widgets safely using types.
            </li>
            <li>
              Just use Rust, without any dependencies.
            </li>
            <li>
              Progressive concepts and pay for overhead only when used.
            </li>
            <li>
              Stateful and stateless can be converted to each other.
            </li>
          </ul>
        }
        image="/static/landing-page/005.png"
      />

      <hr style={{ width: "45%", margin: "auto", marginTop: "100px", border: "0.1px solid #D9D9D9", borderRadius: "5px" }} />
      <Trust
        title="Polestar Chat"
        description="A Rust open source cross-platform ChatGPT/Gemini UI (Linux / Win / MacOS)."
        image="/static/landing-page/Polestar_banner.png"
        link="https://github.com/RibirX/polestar_chat"
      />

      <hr style={{ width: "45%", margin: "auto", marginTop: "100px", border: "0.1px solid #D9D9D9", borderRadius: "5px" }} />

      {/* hack: title color style, it can load tailwind utilities style */}
      <div style={{ display: 'none' }} className={"bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-green-300"}></div>

      <MantineProvider>
        <FAQ />
      </MantineProvider>
    </Layout>
  );
}
