const initialState = {
        products: [],
        adress: [],
        discount: 0,
        delivery: 0,
        total: 0
};

const UserReducer = (state = initialState, action) => {
        let products = [...state.products];
        switch(action.type) {

            case 'CHANGE_PRODUCT':
                if (products[action.payload.key]) {
                    // Cria uma cópia do produto que você quer alterar
                    const product = { ...products[action.payload.key] };

                    switch(action.payload.type) {
                        case '-':
                            product.qt -= 1;
                            if (product.qt <= 0) {
                                products = products.filter((item, index) => index !== action.payload.key);
                            } else {
                                // Substitui o produto antigo pelo novo produto atualizado
                                products[action.payload.key] = product;
                            }
                            break;
                        case '+':
                            product.qt += 1;
                            products[action.payload.key] = product;
                            break;
                        default:
                            break;
                    }
                }
                return { ...state, products };
                case 'ADD_PRODUCT':
                    let id = action.payload.data.id;
                    let index = products.findIndex(item => item.id === id);
                    if ( index > -1){
                        products[index].qt += action.payload.qt;
                    } else {
                        products.push({
                            ...action.payload.data,
                            qt: action.payload.qt
                        });
                    }
                    console.log(products);

                    return { ...state, products };
                case 'SET_ADRESS':
                    return { ...state, adress: action.payload.adress };
                case 'SET_DISCOUNT':
                    let subtotal = 0;
                    for (let i in products) {
                        subtotal += (products[i].price * products[i].qt);
                    }

                    // Calcular o desconto como 0.09% do subtotal
                    const discount = subtotal * 0.0009;


                    return { ...state,  discount,  };
                case 'SET_DELIVERY':
                    const delivery = 5;

                    return { ...state, delivery };
                case 'UPDATE_TOTAL':
                    let total = 0;
                    for(let i in products) {
                        total += (products[i].price * products[i].qt);
                    }
                   // total += state.delivery;
                  total -= state.discount;

                    return { ...state, total };
                case 'CLEAR_CART':

                    return { ...initialState };



                    default:
                    return state;
        }
};

export default UserReducer;