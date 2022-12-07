import { ContentBrand, ContentCategory, ContentProducts } from "./index";

const ContentNav = ({value}) => {
  switch (value) {
    case 'categories':
      return <ContentCategory />
    case 'products':
      return <ContentProducts />
    default:
      return <ContentBrand />
  }
}

export default ContentNav;