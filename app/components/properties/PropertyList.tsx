import PropertyListItem from './PropertyListItem';

const PropertyType= {
    id: 1,
    name: 'Property Name',
    address: 'Property Address',
    price: 100000,
    is_favorite: false
}



const PropertyList = () => {
    return (
    <>
        <PropertyListItem/>
        <PropertyListItem/>
        <PropertyListItem/>
    </>
    );
}
export default PropertyList;
export type {PropertyType};
