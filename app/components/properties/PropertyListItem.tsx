import Image from 'next/image';

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
