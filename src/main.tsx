import ReactDOM from 'react-dom/client';
import Layout from './components/layout/Layout.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Main from './pages/Main.tsx';
import PodcastDetail from './pages/PodcastDetail.tsx';
import EpisodeDetail from './pages/EpisodeDetail.tsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: 'podcast/:podcastId',
    element: <PodcastDetail />
  },
  {
    path: '/podcast/:podcastId/episode/:episodeId',
    element: <EpisodeDetail />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Layout>
    <RouterProvider router={router} />
  </Layout>
);
