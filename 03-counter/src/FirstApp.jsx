import PropTypes from "prop-types";

const FirstApp = ({ title, subtitle, name }) => {
  return (
    <>
      <h1>First App</h1>

      <h4>{title}</h4>

      <p>{subtitle}</p>
    </>
  )
}


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}


export default FirstApp;