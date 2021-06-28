import PropTypes from 'prop-types';

function Message({ message }) {
  return <p>{message}</p>;
}

Message.propTypes = {
  message: PropTypes.string,
};

Message.defaultProps = {
  message: 'hello, world!',
};

export default Message;
