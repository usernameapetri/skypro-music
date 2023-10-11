import { useState } from 'react';
import { Icon } from '../../Icons/Icon';
import Track from '../Track/Track';
import { PopupElements } from './ModalPopup/PerformerPopup';
export default function TrackList() {
  const [yearSortClass, setYearSortClass] = useState('popup__wrapper hidden');
  const [isYearSortClassClicked, setIsYearSortClassClicked] = useState(false);

  const [genreSortClass, setGenreSortClass] = useState(
    'popup__wrapper genre hidden',
  );
  const [isGebreSortClassClicked, setIsGenreSortClassClicked] = useState(false);

  const [performerSortClass, setPerformerSortClass] = useState(
    'popup__wrapper performer hidden',
  );
  const [isPerformerSortClassClicked, setIsPerformerSortClassClicked] =
    useState(false);

  const updateYear = () => {
    if (!isYearSortClassClicked) {
      setYearSortClass('popup__wrapper ');
    } else {
      setYearSortClass('popup__wrapper hidden ');
    }
    setIsYearSortClassClicked(!isYearSortClassClicked);
  };
  const updateGenre = () => {
    if (!isGebreSortClassClicked) {
      setGenreSortClass('popup__wrapper genre ');
    } else {
      setGenreSortClass('popup__wrapper genre hidden');
    }
    setIsGenreSortClassClicked(!isGebreSortClassClicked);
  };
  const updatePerformer = () => {
    if (!isPerformerSortClassClicked) {
      setPerformerSortClass('popup__wrapper performer ');
    } else {
      setPerformerSortClass('popup__wrapper performer hidden ');
    }
    setIsPerformerSortClassClicked(!isPerformerSortClassClicked);
  };
  return (
    <div className="main__centerblock centerblock">
      <div className="centerblock__search search">
        <Icon className="search__svg" name="search" />
        <input
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className="centerblock__h2">Треки</h2>
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <div
          className="filter__button button-author _btn-text"
          onClick={updatePerformer}
        >
          исполнителю
        </div>
        {isPerformerSortClassClicked && (
          <PopupElements classPerformer={performerSortClass} name="performer" />
        )}
        <div
          className="filter__button button-year _btn-text"
          onClick={updateGenre}
        >
          году выпуска
        </div>
        {isGebreSortClassClicked && (
          <PopupElements classGenre={genreSortClass} name="genre" />
        )}
        <div
          className="filter__button button-genre _btn-text"
          onClick={updateYear}
        >
          жанру
        </div>
        {isYearSortClassClicked && (
          <PopupElements classYear={yearSortClass} name="year" />
        )}
      </div>

      <div className="centerblock__content">
        <div className="content__title playlist-title">
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <Icon name="watch" className="playlist-title__svg" alt="time" />
          </div>
        </div>
      </div>
      <Track />
    </div>
  );
}
