/**
 * @file search-value.ts
 * @description This file contains the implementation of a reducer for managing the state of a search component in a React application. 
 * It defines types, enums, interfaces, and the reducer function, which handles different types of search-related actions.
 */


/**
 * @enum SearchActionKind
 * @description Enum representing different kinds of actions that can be dispatched to the search reducer.
 * @property {string} SREGION - Action type for setting the search region.
 * @property {string} SDEPARTUREDATE - Action type for setting the departure date.
 * @property {string} SARRIVALDATE - Action type for setting the arrival date.
 * @property {string} SGUESTS - Action type for setting the number of guests.
 */
enum SearchActionKind {
  SREGION = 'SREGION',
  SDEPARTUREDATE = 'SDEPARTUREDATE',
  SARRIVALDATE = 'SARRIVALDATE',
  SGUESTS = 'SGUESTS',
}


/**
 * @type CurrentTabOn
 * @description Union type representing the possible values for the current tab in the search.
 */
type CurrentTabOn = 'stays' | 'experiences' | 'online-experiences';


/**
 * @type AnyObject
 * @description Type representing an object with string keys and string values.
 */
type AnyObject = { [key: string]: string };


/**
 * @type Value
 * @description Union type representing the possible values for the payload in search actions.
 */
type Value = AnyObject | string | null | boolean;



/**
 * @interface Payloads
 * @description Interface representing the shape of the state managed by the search reducer.
 * @property {AnyObject | null} filterRegion - The region filter value.
 * @property {string | null} filterDepartureDate - The departure date filter value.
 * @property {string | null} filterArrivalDate - The arrival date filter value.
 * @property {AnyObject | null} filterGuests - The guests filter value.
 * @property {CurrentTabOn} tabSearch - The current tab value in the search.
 * @property {CurrentTabOn} tabShow - The show current search.
 */
interface Payloads {
  filterRegion: Exclude<Value, string>,
  filterDepartureDate: Exclude<Value, AnyObject>,
  filterArrivalDate: Exclude<Value, AnyObject>,
  filterGuests: Exclude<Value, string>,
}


/**
 * @interface SearchAction
 * @description Interface representing the shape of actions dispatched to the search reducer.
 * @property {SearchActionKind} type - The type of action being dispatched.
 * @property {Value | null} payload - The payload of the action.
 */
interface SearchAction {
  type: SearchActionKind,
  payload: Value | null
}


/**
 * SearchReducer.
 * @description Reducer function for managing the state of the search component.
 * This reducer handles various actions that update the state values based on user input.
 * The state managed by this reducer will be used in the `header` component through context state.
 * 
 * @param {Payloads} state - The current state of the search component.
 * @param {SearchAction} action - The action being dispatched to update the state.
 * @returns {Payloads} - The new state of the search component.
 */
const SearchReducer = (state: Payloads, action: SearchAction): Payloads => {
  const { payload, type } = action;

  switch (type) {
    case SearchActionKind.SREGION:
      return {
        ...state,
        filterRegion: payload as any
      };
    
    case SearchActionKind.SDEPARTUREDATE:
      return {
        ...state,
        filterDepartureDate: payload as any
      };

    case SearchActionKind.SARRIVALDATE:
      return {
        ...state,
        filterArrivalDate: payload as any
      };

    case SearchActionKind.SGUESTS:
      return {
        ...state,
        filterGuests: payload as any
      };
    

    default:
      return state;
  }
};


/**
 * @constant InitialSearchReducer
 * @description The initial state for the search reducer.
 */
const InitialSearchReducer: Payloads = {
  filterArrivalDate: null,
  filterDepartureDate: null,
  filterGuests: null,
  filterRegion: null,
};


export { type Payloads, InitialSearchReducer, SearchActionKind, SearchReducer };
