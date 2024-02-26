import PropTypes from "prop-types";

const FirstApp = ({ title, subtitle = 'Subtitulo de muestra' , name = 'no name' }) => {
  return (
    <>
      <h1 data-testid='test-title' >{title}</h1>

      <p>{subtitle}</p>
      
      <p>{subtitle}</p>
      
      <p>{name}</p>
    </>
  )
}


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  name: PropTypes.string
}


export default FirstApp;