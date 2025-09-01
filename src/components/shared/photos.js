const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id, width, height) => `https://source.unsplash.com/${id}/${width}x${height}`;

const desdeMiCocinaConAmorLink = id => `https://desdemicocinaconamor-images-bucket.s3.us-west-1.amazonaws.com/${id}`;

const unsplashPhotos = [
  { id: 'Osq7UAVxIOI', width: 1080, height: 780 },
  { id: 'Dhmn6ete6g8', width: 1080, height: 1620 },
  { id: 'RkBTPqPEGDo', width: 1080, height: 720 },
  { id: 'Yizrl9N_eDA', width: 1080, height: 721 },
  { id: 'KG3TyFi0iTU', width: 1080, height: 1620 },
  { id: 'Jztmx9yqjBw', width: 1080, height: 607 },
  { id: '-heLWtuAN3c', width: 1080, height: 608 },
  { id: 'xOigCUcFdA8', width: 1080, height: 720 },
  { id: '1azAjl8FTnU', width: 1080, height: 1549 },
  { id: 'ALrCdq-ui_Q', width: 1080, height: 720 },
  { id: 'twukN12EN7c', width: 1080, height: 694 },
  { id: '9UjEyzA6pP4', width: 1080, height: 1620 },
  { id: 'sEXGgun3ZiE', width: 1080, height: 720 },
  { id: 'S-cdwrx-YuQ', width: 1080, height: 1440 },
  { id: 'q-motCAvPBM', width: 1080, height: 1620 },
  { id: 'Xn4L310ztMU', width: 1080, height: 810 },
  { id: 'ls94iFAQerE', width: 1080, height: 1620 },
  { id: 'X48pUOPKf7A', width: 1080, height: 160 },
  { id: 'GbLS6YVXj0U', width: 1080, height: 810 },
  { id: '9CRd1J1rEOM', width: 1080, height: 720 },
  { id: 'xKhtkhc9HbQ', width: 1080, height: 1440 },
];

const desdeMiCocinaConAmorPhotos = [
  {
    id: '15acdd5d-a0f4-4591-a41c-e638c7928b9d.png', // Tabasco sauce
    width: 80,
    height: 100,
  },
  {
    id: 'a99d7daa-383f-472b-b1a6-a5f69238479b.png', // Basil
    width: 80,
    height: 100,
  },
  {
    id: 'bef535c2-45ff-4c55-a0d2-09bf32630632.png', // Red wine vinegar
    width: 80,
    height: 100
  }
];

/* mdichirico -- this is the original code from the demo. No longer needed, but I'm keeping it around as a reference. */
const photos = unsplashPhotos.map(photo => ({
  src: unsplashLink(photo.id, photo.width, photo.height),
  width: photo.width,
  height: photo.height,
  images: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: unsplashLink(photo.id, breakpoint, height),
      width: breakpoint,
      height,
    };
  }),
}));

const photos2 = desdeMiCocinaConAmorPhotos.map(photo => ({
  // src: desdeMiCocinaConAmorLink(photo.id),
  src: photo.preview,
  width: photo.width || 80,
  height: photo.height || 100,
  images: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: desdeMiCocinaConAmorLink(photo.id),
      width: breakpoint,
      height,
    };
  }),
}));

export default photos2;
