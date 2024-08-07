export interface NavbarTypes {
    searchStateHandler: React.Dispatch<React.SetStateAction<boolean | null>>;
    setArtistName: React.Dispatch<React.SetStateAction<string>>;
    barsToggleState: boolean;
    setBarsToggleState: React.Dispatch<React.SetStateAction<boolean>>;
  }

  export interface MenuTypes {
    setErrorHandler: React.Dispatch<React.SetStateAction<string | null>>;
    setAlbumsHandler: React.Dispatch<React.SetStateAction<any[]>>;
    setArtistName: React.Dispatch<React.SetStateAction<string>>;
    artistName: string;
    setSearchState: React.Dispatch<React.SetStateAction<boolean | null>>;
    searchState: boolean | null;
  }