export default function Home() {
  return (
    <div className="max-w-4x1 mx-auto p-6">
      <header>
        <h1 className="text-4x1 font-bold text-center text-gray-800 mb-6">
          Welcome to QA Rock Shop
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          You may have questions, we may have answers.
        </p>
      </header>
      <main>
        <a
        href="/products"
        className="bg-blue-600 text-white px-8 py-3 rounded-full text-xl hover:bg-blue-700 transition duration-300">
          Visit our products page to check out our gneiss schist.
        </a>
      </main>
      <footer>
      </footer>
    </div>
  );
}
