// import {
//   addToFavorite,
//   removeFromFavorite,
//   removeAllFavorite,
// } from '../redux/action/favoriteAction';
// import { connect } from 'react-redux';

// export const mapStateToProps = (state) => ({
//   favoriteItems: state.favorite.favoriteItems,
// });

// export const mapDispatchToProps = (dispatch) => ({
//   addToFavorite: (item) => dispatch(addToFavorite(item)),
//   removeFromFavorite: (item) => dispatch(removeFromFavorite(item)),
//   removeAllFavorite: () => dispatch(removeAllFavorite()),
// });

// export const hocComponentName = (WrappedComponent) => {
//   const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

//   hocComponent.propTypes = {};

//   return hocComponent;
// };

// export default (ReduxWrapper) =>
//   connect(mapStateToProps, mapDispatchToProps)(hocComponentName(ReduxWrapper));
