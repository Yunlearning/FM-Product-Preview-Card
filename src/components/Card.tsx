import Image from "next/image"
import ProductMobile from "@/assets/images/image-product-mobile.jpg"
import ProductDesktop from "@/assets/images/image-product-desktop.jpg"
import Cart from "@/assets/images/icon-cart.svg"
export default function Card() {
    return (
        <ul className="bg-card-white
        mobile:max-w-mobile
        tablet:max-w-tablet
        desktop:max-w-desktop
        rounded-[8px]
        grid
        mobile:gird-cols-1
        tablet:grid-cols-2
        ">
            <li>
                <Image
                    src={ProductMobile}
                    alt="Product Image"
                    width={350} height={350}
                    className="mobile:block tablet:hidden w-full h-auto rounded-t-lg"
                />
                <Image
                    src={ProductDesktop}
                    alt="Product Image"
                    width={600} height={600}
                    className="mobile:hidden tablet:block w-auto h-full rounded-l-lg"
                />
            </li>
            <li className="text-card-black">
                <ul className="grid grid-cols-1 mobile:space-y-6 tablet:space-y-8 p-8">
                    <li className="grid grid-cols-1 space-y-6">
                        <p className="font-montserrat text-card-4 leading-card-4 tracking-card-2">PERFUME</p>
                        <p className="font-fraunces font-bold text-card-1 leading-card-1 tracking-card-1">Gabrielle Essence Eau De Parfum</p>
                        <p className="font-montserrat text-card-2 leading-card-3 tracking-card-1 text-card-grey">
                            A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
                        </p>
                    </li>
                    <li className="flex space-x-4 items-center">
                        <p className="font-fraunces font-bold text-card-1 leading-card-1 tracking-card-1 text-card-green-500">$149.99</p>
                        <p className="line-through font-montserrat text-card-4 leading-card-4 tracking-card-1">$169.99</p>
                    </li>
                    <li>
                        <button className="w-full h-[50px] 
                        bg-card-green-500 text-card-white font-montserrat font-bold text-card-2 leading-card-2 tracking-card-1 rounded-[8px]
                        flex items-center justify-center gap-2
                        cursor-pointer hover:bg-card-green-700
                        ">
                            <Cart width={18} height={18} alt="cart" />
                            Add to Cart
                        </button>
                    </li>
                </ul>
            </li>
        </ul>
    )
}