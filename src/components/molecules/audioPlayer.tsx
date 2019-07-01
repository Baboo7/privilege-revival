import React, { PureComponent } from "react";
import Sound from "react-sound";
import styled, { css } from "styled-components";

import pauseSVG from "../../assets/images/pause.svg";
import playSVG from "../../assets/images/play.svg";
import absenceMp3 from "../../assets/music/Absence.mp3";
import baccaraMp3 from "../../assets/music/Baccara.mp3";
import couleursMp3 from "../../assets/music/Couleurs.mp3";
import coinDuVoileMp3 from "../../assets/music/Le Coin Du Voile.mp3";
import joiesIvresseMp3 from "../../assets/music/Les Joies De L'Ivresse.mp3";
import silenceTourneMp3 from "../../assets/music/Silence On Tourne.mp3";
import { colors, fontSizes } from "../../theme";
import { onlyMobile, tablet } from "../../utils/deviceStyle";

enum PlayerState {
  PLAYING = "PLAYING",
  STOPPED = "STOPPED",
  PAUSED = "PAUSED",
}

interface PlayerData {
  duration: number;
  position: number;
}

interface IMusic {
  title: string;
  url: any;
}

const playlist: IMusic[] = [
  {
    title: "Baccara",
    url: baccaraMp3,
  },
  {
    title: "Le Coin Du Voile",
    url: coinDuVoileMp3,
  },
  {
    title: "Couleurs",
    url: couleursMp3,
  },
  {
    title: "Absence",
    url: absenceMp3,
  },
  {
    title: "Silence On Tourne",
    url: silenceTourneMp3,
  },
  {
    title: "Les Joies De L'Ivresse",
    url: joiesIvresseMp3,
  },
];

interface IState {
  duration: number;
  musicId: number;
  playing: boolean;
  position: number;
}

export default class AudioPlayer extends PureComponent<{}, IState> {
  public state: IState = {
    duration: 0,
    musicId: 0,
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
    const { musicId, playing } = this.state;

    return (
      <>
        <Sound
          url={playlist[musicId].url}
          playStatus={playing ? PlayerState.PLAYING : PlayerState.PAUSED}
          onPause={this.onPause}
          onPlaying={this.onPlaying}
        />
        <Wrapper>
          <Header>
            <Button onClick={this.togglePlay}>
              <Icon src={playing ? pauseSVG : playSVG} />
            </Button>
            <Title>{playlist[musicId].title}</Title>
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

const Title = styled.p`
  color: ${colors.white};
  letter-spacing: 0.5em;
  margin-left: 20px;

  ${onlyMobile(css`
    font-size: ${fontSizes.mobile.text};
  `)}

  ${tablet(css`
    font-size: ${fontSizes.desktop.text};
  `)}
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
