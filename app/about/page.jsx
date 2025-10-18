export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            About <span className="text-[#e7750a]">Food</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your ultimate destination for discovering delicious meals from all around the world 
          </p>
        </div>

        <div className="mb-12">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="Delicious food"
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              We believe that cooking should be simple, inspiring, and fun. 
              Our mission is to bring recipes closer to everyone, helping 
              people make every meal special.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To become the world’s favorite cooking guide — 
              connecting cultures, flavors, and people through food. 
              Every recipe is a story waiting to be shared.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="https://img.freepik.com/premium-photo/women-chef-white-background_1015182-4259.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Team Member"
                className="w-full h-100 object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-gray-900">Anna Smith</h3>
                <p className="text-gray-500">Head Chef</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="https://masterpiecer-images.s3.yandex.net/988839e82e3b11ee8b44665ed5a7b875:upscaled"
                alt="Team Member"
                className="w-full h-100 object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-gray-900">Maria</h3>
                <p className="text-gray-500">Recipe Creator</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="https://mastdp.com/img/beautiful-girl/beautiful-girl-wallpaper-download.webp"
                alt="Team Member"
                className="w-full h-100 object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-gray-900">Syuzi </h3>
                <p className="text-gray-500">Food Photographer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-700 text-lg">
            Thank you for trusting us on your cooking journey. 
            Let’s make every meal special together! 🍴
          </p>
        </div>
      </div>
    </div>
  );
}
