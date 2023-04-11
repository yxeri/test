type BaseMenuItem = {
  title: string,
  items?: MenuItem[],
};

type MenuItemWithUrl = BaseMenuItem & {
  url: string, // External url
  link?: never, // Internal path
};

type MenuItemWithLink = BaseMenuItem & {
  link: string, // Internal path
  url?: never, // External url
};

type MenuItemWithTitle = BaseMenuItem & {
  items: MenuItem[],
};

type MenuItem = MenuItemWithUrl | MenuItemWithLink | MenuItemWithTitle;

type BaseColumn = {
  link?: string, // Can be external url or internal path
  heading?: string,
  image?: string, // Url to image
  text?: string,
};

type ColumnWithText = BaseColumn & {
  text: string,
};

type ColumnWithHeading = BaseColumn & {
  heading: string,
};

type ColumnWithImage = BaseColumn & {
  image: string, // Url to image
};

type Column = ColumnWithImage | ColumnWithText | ColumnWithHeading;

type BaseBlock = {
};

type ColumnBlock = BaseBlock & {
  type: 'columns',
  columns: Column[],
};

type CarouselItem = {
  image: string, // Url to image
  heading?: string,
  text: string,
  link?: string, // Can be external url or internal path
};

type CarouselBlock = BaseBlock & {
  type: 'carousel',
  items: CarouselItem[],
};

type Block = ColumnBlock | CarouselBlock;
type Navigation = MenuItem[];

export type Api = {
  navigation: Navigation,
  blocks: Block[],
};
