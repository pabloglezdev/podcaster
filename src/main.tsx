import ReactDOM from 'react-dom/client';
import Layout from './components/layout/Layout.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Main from './pages/MainPage.tsx';
import PodcastDetail from './pages/PodcastDetailPage.tsx';
import EpisodeDetail from './pages/EpisodeDetailPage.tsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Main />
      </Layout>
    )
  },
  {
    path: 'podcast/:podcastId',
    element: (
      <Layout>
        <PodcastDetail />
      </Layout>
    )
  },
  {
    path: '/podcast/:podcastId/episode/:episodeId',
    element: (
      <Layout>
        <EpisodeDetail />
      </Layout>
    )
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
