import { useState } from 'react';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';

import styles from './Comment.module.css';

export interface ContentProps {
  id: number;
  comment: string;
  publishedAt: Date;
}

interface CommentProps {
  content: ContentProps;
  onDeleteComment: (id: number) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps){

  const { id, comment, publishedAt } = content;

  const [likeCount, setLikeCount] = useState(0);

  const publishedDateFormatted = format(publishedAt, "d 'de' MMMM 'às' HH:mm'h'", { 
    locale: ptBR
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { 
    locale: ptBR,
    addSuffix: true,
  });

  function handleDeleteComment() {
    onDeleteComment(id);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/enricomadeu.png" alt=""/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Enrico Fernandes</strong>
              <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{comment}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}