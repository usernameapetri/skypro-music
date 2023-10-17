  import { useState } from 'react';
  import { Icon } from '../../Icons/Icon';
  import Track from '../Track/Track';
  import { PopupElements } from './ModalPopup/PerformerPopup';

  export default function TrackList() {
    const [selectedPopUp, setSelectedPopUp] = useState(null);

    const getPopUp = (popupType) => {
      if (selectedPopUp === popupType) {
        setSelectedPopUp(null); 
      } else {
        setSelectedPopUp(popupType);
        
      }
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
            className={`filter__button button-author _btn-text ${
              selectedPopUp === 'performer' ? 'active' : ''
            }`}
            onClick={() => getPopUp('performer')}
          >
            исполнителю
          </div>
          {selectedPopUp === 'performer' && <PopupElements name="performer" />}
          <div
            className={`filter__button button-year _btn-text ${
              selectedPopUp === 'year' ? 'active' : ''
            }`}
            onClick={() => getPopUp('year')}
          >
            году выпуска
          </div>
          {selectedPopUp === 'year' && <PopupElements name="year" />}
          <div
            className={`filter__button button-genre _btn-text ${
              selectedPopUp === 'genre' ? 'active' : ''
            }`}
            onClick={() => getPopUp('genre')}
          >
            жанру
          </div>
          {selectedPopUp === 'genre' && <PopupElements name="genre" />}
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
