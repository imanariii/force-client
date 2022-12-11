import { ContentBrand, ContentCategory, AddProductsContent, ContentProducts } from "./index";

const ContentNav = ({value}) => {
  switch (value) {
    case 'categories':
      return <ContentCategory />
    case 'add-products':
      return <AddProductsContent />
    case 'products':
      return <ContentProducts />
    default:
      return <ContentBrand />
  }
}

export default ContentNav;