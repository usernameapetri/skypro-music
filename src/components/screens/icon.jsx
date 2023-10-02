import React from 'react';
import { ReactComponent as IconDislike } from '../../assets/icon/dislike.svg';
import { ReactComponent as IconLike } from '../../assets/icon/like.svg';
import { ReactComponent as IconNext } from '../../assets/icon/next.svg';
import { ReactComponent as IconNote } from '../../assets/icon/note.svg';
import { ReactComponent as IconPlay } from '../../assets/icon/play.svg';
import { ReactComponent as IconPrev } from '../../assets/icon/prev.svg';
import { ReactComponent as IconRepeat } from '../../assets/icon/repeat.svg';
import { ReactComponent as IconSearch } from '../../assets/icon/search.svg';
import { ReactComponent as IconShuffle } from '../../assets/icon/shuffle.svg';
import { ReactComponent as IconSprite } from '../../assets/icon/sprite.svg';
import { ReactComponent as IconVolume } from '../../assets/icon/volume.svg';
import { ReactComponent as IconLogout } from '../../assets/icon/logout.svg';

export const Icon = ({ name }) => {
  if (name === 'dislike') return <IconDislike />;
  if (name === 'like') return <IconLike />;
  if (name === 'next') return <IconNext />;
  if (name === 'note') return <IconNote />;
  if (name === 'play') return <IconPlay />;
  if (name === 'prev') return <IconPrev />;
  if (name === 'repeat') return <IconRepeat />;
  if (name === 'search') return <IconSearch />;
  if (name === 'shuffle') return <IconShuffle />;
  if (name === 'sprite') return <IconSprite />;
  if (name === 'volume') return <IconVolume />;
  if (name === 'logout') return <IconLogout />;
};
