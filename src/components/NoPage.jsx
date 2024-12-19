const NoPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen text-center">
    <h1 className="text-4xl font-bold mb-4">404</h1>
    <p className="text-lg mb-8">
      Oops! The page you are looking for doesn't exist.
    </p>
    <a href="/" className="text-blue-500 hover:text-blue-700 transition-colors">
      Go Back Home
    </a>
  </div>
);

export default NoPage;
