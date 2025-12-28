import Image from "next/image";
import Link from "next/link";

const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data.details;
};

export default async function Page({ params }) {
  const { id } = await params;
  const food = await getSingleFood(id);

  if (!food) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold">Food not found 😢</h2>
        <Link href="/" className="text-emerald-600 underline mt-4 block">
          Go back
        </Link>
      </div>
    );
  }

  const { title, foodImg, price, category, area, video } = food;

  return (
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Image */}
      <div className="relative h-[350px] w-full rounded-2xl overflow-hidden shadow-lg">
        <img src={foodImg} alt={title} className="" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">{title}</h1>

        <p className="text-lg text-stone-600">
          <span className="font-semibold">Category:</span> {category}
        </p>

        <p className="text-lg text-stone-600">
          <span className="font-semibold">Area:</span> {area}
        </p>

        <p className="text-3xl font-bold text-emerald-600">৳ {price}</p>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-medium">
            Add to Cart
          </button>

          {video && (
            <a
              href={video}
              target="_blank"
              className="border border-stone-300 hover:bg-stone-100 px-6 py-3 rounded-xl font-medium"
            >
              Watch Video
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
