import React, { PureComponent } from "react";

import { SEO } from "../components/atoms";
import { Footer, HeroSection } from "../components/organisms";

interface IState {
  musicTitle: string;
}

export default class IndexPage extends PureComponent<{}, IState> {
  public state: IState = {
    musicTitle: "",
  };

  public onMusicChanged = (musicTitle: string): void => {
    this.setState({ musicTitle });
  };

  render() {
    const { musicTitle } = this.state;

    return (
      <>
        <SEO
          keywords={[
            `privilege`,
            `musique`,
            `rock`,
            `années 80`,
            `baccara`,
            `le coup du voile`,
            `couleurs`,
            `absence`,
            `silence on tourne`,
            `les joies de l'ivresse`,
            `silence`,
            `tourne`,
            `joies`,
            `ivresse`,
            `renaissance`,
            `revival`,
            `music`,
            `80's`,
          ]}
          musicTitle={musicTitle}
        />
        <HeroSection onMusicChanged={this.onMusicChanged} />
        <Footer />
      </>
    );
  }
}
