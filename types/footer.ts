export interface FooterLink {
  name: string;
  title: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  productTitle: string;
  productDescription: string;
  columns: FooterColumn[];
}

