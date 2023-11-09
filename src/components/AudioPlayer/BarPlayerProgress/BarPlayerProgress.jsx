import * as S from './BarPlayerProgress.Styles';

export default function BarPlayerProgress(props) {
  return (
    <S.VolumeProgressLine
      type="range"
      min="0"
      max={props.duration}
      value={props.currentTime}
      step={0.01}
      onChange={props.handleProgressChange}
      $color="#B672FF"
    />
  );
}
