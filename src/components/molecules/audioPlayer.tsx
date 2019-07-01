import React, { PureComponent } from "react";
import Sound from "react-sound";
import styled from "styled-components";

import pauseSVG from "../../assets/images/pause.svg";
import playSVG from "../../assets/images/play.svg";
import mp3 from "../../assets/music/Couleurs.mp3";
import { colors } from "../../theme";

enum PlayerState {
  PLAYING = "PLAYING",
  STOPPED = "STOPPED",
  PAUSED = "PAUSED",
}

interface PlayerData {
  duration: number;
  position: number;
}

interface IState {
  duration: number;
  playing: boolean;
  position: number;
}

export default class AudioPlayer extends PureComponent<{}, IState> {
  public state: IState = {
    duration: 0,
    playing: false,
    position: 0,
  };

  public onPause = (e: any): void => {
    console.log(e);
  };

  public onPlaying = ({ duration, position }: PlayerData): void => {
    this.setState({ duration, position });
  };

  render() {
    const { playing } = this.state;

    return (
      <>
        <Sound
          url={mp3}
          playStatus={playing ? PlayerState.PLAYING : PlayerState.PAUSED}
          onPause={this.onPause}
          onPlaying={this.onPlaying}
        />
        <Wrapper>
          <Header>
            <Button onClick={this.togglePlay}>
              <Icon src={playing ? pauseSVG : playSVG} />
            </Button>
          </Header>
        </Wrapper>
      </>
    );
  }

  public togglePlay = (): void => {
    this.setState(({ playing }: IState) => ({ playing: !playing }));
  };
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${colors.whitesmoke};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 80px;
  box-sizing: border-box;
  padding: 0 10px;
  background-color: ${colors.silver};
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  border-radius: 60px;
  background-color: ${colors.cobalt};

  &:active {
    background-color: ${colors.darkslateblue};
  }
`;

const Icon = styled.img`
  height: 24px;
  width: 24px;
`;
