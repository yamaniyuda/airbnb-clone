enum SearchLogicKind {
  SHOWSEARCH = "SHOWSEARCH",
  SHOWINPUTSEARCH = "SHOWINPUTSEARCH",
  SHOWCURRENTTAB = 'SHOWCURRENTTAB'
}

type CurrentTabOn = "stays" | "experiences" | "online-experiences";
type CurrentInputOn = "destination" | "date" | "guest"

interface Payloads {
  showSearch: boolean;
  shwoInputSearch: CurrentInputOn | null;
  showCurrentTab: CurrentTabOn | null
}


interface SearchAction {
  type: SearchLogicKind;
  payload: boolean | CurrentTabOn | null;
}


const SearchLogic = (state: Payloads, action: SearchAction): Payloads => {
  const { payload, type } = action;

  switch (type) {
    case SearchLogicKind.SHOWCURRENTTAB:
      return {
        ...state,
        showCurrentTab: payload as any
      }

    case SearchLogicKind.SHOWINPUTSEARCH:
      return {
        ...state,
        shwoInputSearch: payload as any
      }

    case SearchLogicKind.SHOWSEARCH:
      return {
        ...state,
        showSearch: payload as any
      }

    default:
      return state;
  }
};



const InitialSearchLogic: Payloads = {
  showCurrentTab: null,
  showSearch: true,
  shwoInputSearch: null
};


export { type Payloads, InitialSearchLogic, SearchLogicKind, SearchLogic };
