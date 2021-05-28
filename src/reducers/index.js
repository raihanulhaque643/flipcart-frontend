import { combineReducers } from 'redux';
import { categoryReducer } from './category.reducers';
import { authReducer } from './auth.reducers';
import { productReducer } from './product.reducers';
import { cartReducer } from './cart.reducers';
import { userReducer } from './user.reducers';

const rootReducer = combineReducers({
    category: categoryReducer,
    product: productReducer,
    auth: authReducer,
    cart: cartReducer,
    user: userReducer
});

export default rootReducer;