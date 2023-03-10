import PropTypes from "prop-types";

export const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <h2>YOUTUBE VIDEO</h2> 
    <iframe
      width="853"
      height="480"
      // origin="https://localhost:3000"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"

    />
  </div>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
  };
  
export default YoutubeEmbed;