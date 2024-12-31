interface ItemData {
    id: string;
    description: string;
    noSold: string;
    cPrice: number;
    iPrice: number;
    discount: string;
    delay: number;
    status: string[];
    imgs: string[];
    compactibleModel: string[];
    review: string;
    rating: number;
  }
  
  export interface CardDataType {
    data: ItemData;
  };