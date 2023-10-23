import { useState } from 'react';
import SearchBar from './SearchBar';
import Track from '../Track/Track';
import { PopupElements } from './ModalPopup/PerformerPopup';
import * as S from './TrackList.Styles';
import CenterBlock from './CenterBlock';
export default function TrackList(props) {
  const [selectedPopUp, setSelectedPopUp] = useState(null);
  console.log(props.trackData);
  const getPopUp = (popupType) => {
    if (selectedPopUp === popupType) {
      setSelectedPopUp(null);
    } else {
      setSelectedPopUp(popupType);
    }
  };

  return (
    <CenterBlock>
      <SearchBar />
      <S.CenterBlockH2>Треки</S.CenterBlockH2>
      <S.CenterBlockFilter>
        <S.FilterTitle>Искать по:</S.FilterTitle>
        <S.FilterButton
          className={`${selectedPopUp === 'performer' ? 'active' : ''}`}
          onClick={() => getPopUp('performer')}
        >
          исполнителю
        </S.FilterButton>
        {selectedPopUp === 'performer' && <PopupElements name="performer" />}
        <S.FilterButton
          className={`${selectedPopUp === 'year' ? 'active' : ''}`}
          onClick={() => getPopUp('year')}
        >
          году выпуска
        </S.FilterButton>
        {selectedPopUp === 'year' && <PopupElements name="year" />}
        <S.FilterButton
          className={`${selectedPopUp === 'genre' ? 'active' : ''}`}
          onClick={() => getPopUp('genre')}
        >
          жанру
        </S.FilterButton>
        {selectedPopUp === 'genre' && <PopupElements name="genre" />}
      </S.CenterBlockFilter>

      <S.CenterBlockContent>
        <S.ContentTitle className="playlist-title">
          <S.PlaylistTitleCol width="447px">Трек</S.PlaylistTitleCol>
          <S.PlaylistTitleCol width="321px">ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol>
          <S.PlaylistTitleCol width="245px">АЛЬБОМ</S.PlaylistTitleCol>
          <S.PlaylistTitleColExtra>
            <S.StyledIcon
              name="watch"
              className="playlist-title__svg"
              alt="time"
            />
          </S.PlaylistTitleColExtra>
        </S.ContentTitle>
      </S.CenterBlockContent>
      <S.ContentPlaylist>
        {props.trackData.map((el) => (
          <Track
            key={el.id}
            name={el.name}
            id={el.id}
            author={el.author}
            album={el.album}
            duration={el.duration_in_seconds}
            url={el.track_file}
          />
        ))}
      </S.ContentPlaylist>
    </CenterBlock>
  );
}
