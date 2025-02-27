import Link from 'next/link';
import Image from 'next/image';
import blogimage1 from '@/assets/blogimage1.png';
import blogimage2 from '@/assets/ourstoryimage.png'
export const SubstackPosts = () => {
    return (
        <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-4xl font-inter font-bold text-center mb-16">Our Story</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card */}
          <div className="rounded-xl w-auto  h-auto overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <Link href = "https://www.biocomputeinc.com/p/coming-soon?utm_campaign=post&utm_medium=web">
            <Image src = {blogimage1} alt="BioCompute Logo"/>
            <h2 className="text-xl font-inter mt-6 mb-2 mx-2">Hello World, We Are BioCompute!</h2>
            <p className="text-gray-600 mb-4 mx-2">Prologue</p>
            </Link>
          </div>
          
          {/* Right Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <Link href = "https://www.biocomputeinc.com/p/a-primer-on-dna-no-pun-intended?utm_campaign=post&utm_medium=web">
            <Image src={blogimage2} alt="DNA Double Helix"/>
            <h2 className="text-xl font-inter mt-6 mb-2 mx-2">A Primer on DNA (no pun intended)</h2>
            <p className="text-gray-600 mb-8 mx-2">It&apos;s been a week since we announced</p>
            <p className = "text-gray-600 -mt-8 mb-4 mx-2">BioCompute to the world</p>
            </Link>
          </div>
        </div>
        <div className="text-right w-full mt-6">
            <Link href="https://www.biocomputeinc.com/archive" className="bg-black text-white px-6 py-3 rounded-lg font-medium inline-block transition delay-50 duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-lg">
                Explore More &gt;
            </Link>
        </div>
      </section>
    );
};
