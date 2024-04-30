type PodcastCategoryAttributes = {
  'im:id': string;
  label: string;
  scheme: string;
  term: string;
};

type PodcastCategory = {
  attributes: PodcastCategoryAttributes;
};

type PodcastId = {
  attributes: {
    'im:id': string;
  };
  label: string;
};

type PodcastName = {
  label: string;
};

type PodcastImage = {
  label: string;
  attributes: {
    height: string;
  };
};

type PodcastSummary = {
  label: string;
};

type PodcastPrice = {
  label: string;
  attributes: {
    amount: string;
    currency: string;
  };
};

type PodcastContentType = {
  attributes: {
    term: string;
    label: string;
  };
};

type PodcastRights = {
  label: string;
};

type PodcastTitle = {
  label: string;
};

type PodcastLink = {
  attributes: {
    href: string;
    rel: string;
    type: string;
  };
};

type PodcastArtist = {
  label: string;
  attributes: {
    href: string;
  };
};

type PodcastReleaseDate = {
  label: string;
  attributes: {
    label: string;
  };
};

export type RawPodcast = {
  'im:artist': PodcastArtist;
  'im:contentType': PodcastContentType;
  'im:image': PodcastImage[];
  'im:name': PodcastName;
  'im:price': PodcastPrice;
  'im:releaseDate': PodcastReleaseDate;
  'im:summary': PodcastSummary;
  category: PodcastCategory;
  id: PodcastId;
  link: PodcastLink;
  rights: PodcastRights;
  title: PodcastTitle;
};

export type Podcast = {
  artist: PodcastArtist;
  category: PodcastCategory;
  contentType: PodcastContentType;
  id: PodcastId;
  image: PodcastImage[];
  link: PodcastLink;
  name: PodcastName;
  price: PodcastPrice;
  releaseDate: PodcastReleaseDate;
  rights: PodcastRights;
  summary: PodcastSummary;
  title: PodcastTitle;
};

// PodcastDetail types are not equal on every object, so no contract is defined to avoid possible errors.
export type EpisodeDetail = Record<string, string>;
