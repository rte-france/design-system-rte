const PRESENTATION_VIDEO_URL =
  "https://player.vimeo.com/video/1143460920?h=30ca4bfa41&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";

type PresentationVideoProps = {
  width?: string;
  height?: string;
  title?: string;
};

const PresentationVideo = ({ width = "100%", height = "600", title = "RTE - LUCIOLE" }: PresentationVideoProps) => (
  <iframe
    width={width}
    height={height}
    src={PRESENTATION_VIDEO_URL}
    frameBorder="0"
    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    title={title}
  />
);

export default PresentationVideo;
