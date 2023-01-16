// NOTE: DO NOT MODIFY the intial state structure in this file.
import * as types from "./actionType";
const initialState = {
  cloths: [],
  cartData:[],
  cartKey:[],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const {type,payload} = action;
  switch(type){
    case types.GET_CLOTHS_DATA_REQUEST:
      return {
        ...state,
        isLoading: true
      };
      case types.GET_CLOTHS_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          cloths:payload
        };
        case types.GET_CLOTHS_DATA_FAILURE:
          return {
            ...state,
            isLoading:false,
            isError: true,
          };
          case types.GET_CARTKEY_REQUEST:
            return {
              ...state,
              isLoading:true, 
            };
            case types.GET_CARTKEY_SUCCESS:
              return{
              ...state,
              isLoading:false, 
              cartKey:payload   
              };
              case types.GET_CARTKEY_FAILURE:
                return{
                  ...state,
                  isLoading:false, 
                  isError:true
                };
                case types.GET_CARTDATA_REQUEST:
                  return {
                    ...state,
                    isLoading:true,
                  };
                  case types.GET_CARTDATA_SUCCESS:
                    return{
                      ...state,
                      isLoading:false,
                      cartData:payload
                    };
                    case types.GET_CARTDATA_FAILURE:
                      return{
                        ...state,
                        isLoading:false,
                        isError:true
                      }
          default:
            return state;
  }
  
};

export { reducer };
