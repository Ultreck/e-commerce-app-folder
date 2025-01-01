type imgData = {src: string}
interface ItemData {
    id: string;
    description: string;
    noSold: string;
    cPrice: number;
    iPrice: number;
    discount: string;
    delay: number;
    status: string[];
    imgs: imgData[];
    compactibleModel: string[];
    review: string;
    rating: number;
    ukSize: string[];
    stdSize: string[];
    color: string[];
  }
  
  export interface CardDataType {
    data: ItemData;
    children?: React.ReactNode;
  };

  export interface sliderType {
    data: string[];
    delayValue: number;
  }