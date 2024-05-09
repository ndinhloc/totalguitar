export default function Footer() {
  return (
    <div className="w-full h-[640px] bg-[#F5F5F5] mt-20 text-lg">
      <div className="w-3/4  h-full mx-auto flex justify-between pt-20">
        <div className="flex flex-col gap-y-2 font-light">
          <h1 className="text-lg font-semibold mb-6">SHOP</h1>
          <h1>About Us</h1>
          <h1>Our team</h1>
          <h1>Flagship Store</h1>
        </div>
        <div className="flex flex-col gap-y-2 font-light">
          <h1 className="text-lg font-semibold mb-6">CUSTOMER SERVICE</h1>
          <h1>Contact</h1>
          <h1>Services & Mainternance</h1>
          <h1>Wholesale</h1>
          <h1>Sell your gear</h1>
          <h1>Shipping Policies</h1>
          <h1>Terms of Service</h1>
          <h1>Return Policy</h1>
          <h1>Privacy Policy</h1>
        </div>
        <div className="flex flex-col gap-y-2 font-light">
          <h1 className="text-lg font-semibold mb-6">VISIT US</h1>
          <h1 className=" font-medium">Store Hours</h1>
          <h1>Monday - Sunday</h1>
          <h1>10 AM - 8:30 PM</h1>
          <h1 className=" font-medium mt-2">Reverb</h1>
          <h1>Visit our store on Reverb</h1>
          <h1 className=" font-medium mt-2">Vintage & Rare</h1>
          <h1>Visit our store on Vintage & Rare</h1>
          <h1 className=" font-medium mt-2">Lab&apos;s Shopee</h1>
          <h1>Visit our store on Shopee</h1>
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold mb-6">
            Let&apos;s get in touch
          </h1>
          <h1 className="font-light">
            Get Latest News About Discounts & Promotions.
          </h1>
          <input className="w-[15vw] h-10 rounded mt-6"></input>
        </div>
      </div>
    </div>
  );
}
