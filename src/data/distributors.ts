
export interface Distributor {
  id: string;
  name: string;
  feesPercentage: number;
  logo: string;
}

export const distributors: Distributor[] = [
  {
    id: "musicpro",
    name: "MusicPro",
    feesPercentage: 25,
    logo: "https://cdn-icons-png.flaticon.com/512/2829/2829076.png"
  },
  {
    id: "cdbaby",
    name: "CD Baby",
    feesPercentage: 9,
    logo: "https://cdn-icons-png.flaticon.com/512/9954/9954057.png"
  },
  {
    id: "onerpm",
    name: "ONErpm",
    feesPercentage: 15,
    logo: "https://cdn-icons-png.flaticon.com/512/651/651780.png"
  },
  {
    id: "unitedmasters",
    name: "UnitedMasters",
    feesPercentage: 10,
    logo: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
  }
];
