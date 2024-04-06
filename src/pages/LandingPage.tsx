import LandingTitle from '../components/LandingPage/LandingTitle';

const LandingPage = () => {
  return (
    <main className="scrollbar-hidden size-full overflow-y-scroll">
      <div className="py-40 [background:radial-gradient(farthest-side_at_50%_0,#64e6b622,transparent)]">
        <LandingTitle>Hello World</LandingTitle>

        <h2 className="bg-gradient-green bg-clip-text text-center text-3xl font-bold">
          Lorem ipsum dolor sit amet
        </h2>
      </div>

      <div>
        <p className="px-[12%] py-10 text-2xl font-bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo porro officiis quae ea nam
          voluptate magni veniam beatae architecto ex explicabo cum doloremque recusandae facere
          nostrum, obcaecati adipisci perspiciatis quis!
        </p>
      </div>
    </main>
  );
};
export default LandingPage;
