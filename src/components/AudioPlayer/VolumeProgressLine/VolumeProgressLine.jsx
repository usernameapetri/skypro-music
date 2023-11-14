import * as S from './VolumeProgressLine.Styles';

export default function VolumeProgressLine(props) {
  return (
    <S.BarVolumeBlock>
      <S.VolumeContent>
        <S.VolumeImage>
          <S.VolumeSvg name="volume" alt="volume" />
        </S.VolumeImage>
        <S.VolumeProgress>
          <S.VolumeProgressLine
            onChange={props.handleVolumeChange}
            name="range"
            type="range"
            value={props.volume * 100}
            min="0"
            max="100"
          />
        </S.VolumeProgress>
      </S.VolumeContent>
    </S.BarVolumeBlock>
  );
}
