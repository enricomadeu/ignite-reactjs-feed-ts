import { Header, Post, Sidebar } from './components'; // Import the Header component

import styles from './App.module.css'; // Import the stylesheet

import './global.css';  // Import the global stylesheet

const posts = [ // Create a list of posts
  {
    id: 0,
    author: {
      avatarUrl: 'https://github.com/enricomadeu.png',
      name: 'Enrico Fernandes',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-07-26 20:13:30'),
  },
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat' 
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa' },
      { type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-07-27 08:13:30'),
  },
];

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              publishedAt={post.publishedAt}
              content={post.content}              
            />
          ))}
        </main>
      </div>
    </div>
  )
}