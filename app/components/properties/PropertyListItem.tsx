import Image from 'next/image';
import {PropertyType} from './PropertyList';
import {UserRouter} from 'next/router';


interface PropertyProps {
    property: PropertyType;
    makrFavorite: (is_favorite: boolean) => void;
}

const PropertyListItem = () => {
    return (
    <div className="cursor-pointer">
        <div className="owerflow-hidden aspect-square rounded-xl">
            <Image src="/images/property.jpg" alt="Property" width={300} height={300}/>
        </div>
    </div>
    );
}
export default PropertyListItem;
