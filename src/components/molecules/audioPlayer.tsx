import classnames from "classnames";
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
import { colors } from "../../theme";
import { belowTablet, desktop } from "../../utils/deviceStyle";

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
    duration: 1,
    musicId: 0,
    playing: false,
    position: 0,
  };

  public onFinishedPlaying = (): void => {
    const { musicId } = this.state;

    if (musicId < playlist.length - 1) {
      this.setState({ musicId: musicId + 1 });
    } else {
      this.setState({ playing: false });
    }
  };

  public onPlaying = ({ duration, position }: PlayerData): void => {
    this.setState({ duration, position });
  };

  render() {
    const { duration, musicId, playing, position } = this.state;

    return (
      <>
        <Sound
          url={playlist[musicId].url}
          playStatus={playing ? PlayerState.PLAYING : PlayerState.PAUSED}
          onFinishedPlaying={this.onFinishedPlaying}
          onPlaying={this.onPlaying}
        />
        <Wrapper>
          <Header>
            <Button onClick={this.togglePlay}>
              <Icon src={playing ? pauseSVG : playSVG} />
            </Button>
            <Title>{playlist[musicId].title}</Title>
          </Header>
          <Content>
            <ProgressBar progress={(position / duration) * 100} />
            {playlist.map((music: IMusic, i: number) => (
              <Music key={music.title} onClick={() => this.selectMusic(i)}>
                <MusicTitle
                  className={classnames({ selected: i === musicId })}
                  color={colors.darkslategray}
                >
                  {i + 1}. {music.title}
                </MusicTitle>
              </Music>
            ))}
          </Content>
        </Wrapper>
      </>
    );
  }

  public selectMusic = (musicId: number): void => {
    if (musicId !== this.state.musicId) {
      this.setState({ musicId, playing: true });
    }
  };

  public togglePlay = (): void => {
    this.setState(({ playing }: IState) => ({ playing: !playing }));
  };
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: auto;

  ${belowTablet(css`
    flex-grow: 1;
  `)}
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${colors.whitesmoke};

  ${desktop(css`
    flex-basis: 300px;
  `)}
`;

interface IProgressBar {
  progress: number;
}

const ProgressBar = styled.div<IProgressBar>`
  height: 6px;
  min-height: 6px;
  width: ${({ progress }: IProgressBar): string => `${progress}%`};
  background-color: ${colors.primaryDark};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 80px;
  box-sizing: border-box;
  padding-left: 20px;
  background-color: ${colors.silver};
`;

const Title = styled.p`
  background-color: ${colors.black};
  margin-left: 20px;
  padding: 0 10px;
  color: ${colors.white};
  letter-spacing: 0.1em;
  font-size: 1.4em;

  ${desktop(css`
    font-size: 1.6em;
  `)}
`;

const MusicTitle = styled(Title)`
  background-color: transparent;
  color: ${colors.darkslategray};
  font-size: 1em;

  ${desktop(css`
    font-size: 1.2em;
  `)}

  &.selected {
    background-color: ${colors.black};
    color: ${colors.white} !important;
  }
`;

const Music = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 10px;
  cursor: pointer;

  &:not(:last-of-type) {
    border-bottom: 2px solid ${colors.silver};
  }

  &:hover ${MusicTitle} {
    color: ${colors.primary};
  }

  ${belowTablet(css`
    flex-grow: 1;
  `)}

  ${desktop(css`
    flex-basis: 50px;
  `)}
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: ${colors.primary};

  &:active {
    background-color: ${colors.primaryDark};
  }
`;

const Icon = styled.img`
  height: 24px;
  width: 24px;
`;
