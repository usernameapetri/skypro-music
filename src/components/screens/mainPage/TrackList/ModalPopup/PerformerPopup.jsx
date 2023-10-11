import './ModalPopup.css';

export const PopupElements = (props) => {
  if (props.name === 'year') {
    return (
      <div className={props.classYear}>
        <ul className="popup">
          <li className="popup__element">По умолчанию</li>
          <li className="popup__element">Сначала новые</li>
          <li className="popup__element">Сначала старые</li>
        </ul>
      </div>
    );
  } else if (props.name === 'performer') {
    return (
      <div className={props.classPerformer}>
        <ul className="popup">
          <li className="popup__element">Michael Jackson</li>
          <li className="popup__element">Frank Sinatra</li>
          <li className="popup__element">Calvin Harris</li>
          <li className="popup__element">Zhu</li>
          <li className="popup__element">Arctic Monkeys</li>
        </ul>
      </div>
    );
  } else if (props.name === 'genre') {
    return (
      <div className={props.classGenre}>
        <ul className="popup">
          <li className="popup__element">Рок</li>
          <li className="popup__element">Хип-хоп</li>
          <li className="popup__element">Поп-музыка</li>
          <li className="popup__element">Техно</li>
          <li className="popup__element">Инди</li>
        </ul>
      </div>
    );
  }
};

export default PopupElements;
