type BaseMenuItem = {
  title: string,
  items?: MenuItem[],
};

type MenuItemWithUrl = BaseMenuItem & {
  url: string,
  link?: never,
};

type MenuItemWithLink = BaseMenuItem & {
  link: string,
  url?: never,
};

type MenuItem = MenuItemWithUrl | MenuItemWithLink;

type BaseColumn = {
  link?: string,
  heading?: string,
  image?: string,
  text?: string,
};

type ColumnWithText = BaseColumn & {
  text: string,
};

type ColumnWithHeading = BaseColumn & {
  heading: string,
};

type ColumnWithImage = BaseColumn & {
  image: string,
};

type Column = ColumnWithImage | ColumnWithText | ColumnWithHeading;

type BaseBlock = {
};

type ColumnBlock = BaseBlock & {
  type: 'columns',
  columns: Column[],
};

type CarouselItem = {
  image: string,
  heading?: string,
  text: string,
  link?: string,
};

type CarouselBlock = BaseBlock & {
  type: 'carousel',
  items: CarouselItem[],
};

export type Block = ColumnBlock | CarouselBlock;
export type Navigation = MenuItem[];
