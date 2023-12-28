const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center gap-3 bg-slate-">
      <h1 className="text-red-500 font-bold text-5xl">Oops!</h1>
      <p className="text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-lg">404 Page Not Found</p>
    </div>
);
};

export default ErrorPage;
