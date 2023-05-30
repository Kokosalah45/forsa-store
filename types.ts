export type SectorType = {
  results: {
    value: string;
    slug: string;
    label: string;
  }[];
};

export type BrandItemType = {
  results: {
    title: string;
    id: string;
  }[];
};
export type FeaturedItemType = {
  results: {
    expiry_date: string;
    id: string;
    description: string;
    brand: {
      sector: {
        label: string;
      };
    };
  }[];
};

export type PageType = {
  next: string | null;
  previous: string | null;
  count: number;
};
