import PropTypes from 'prop-types';

const goatShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  isBusy: PropTypes.bool.isRequired,
  BeardLength: PropTypes.string.isRequred,
  isFainter: PropTypes.bool.isRequired,
  imgUrl: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
});

export default { goatShape };
