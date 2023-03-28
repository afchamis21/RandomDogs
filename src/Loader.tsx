export function Loader(){
  let circleCommonClasses = 'h-2.5 w-2.5 bg-current   rounded-full';

    return (
        <>
          <div className="overflow-hidden flex flex-col items-center justify-center">
            <div className="rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4 border-t-cyan-500 animate-spin"></div>
            <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
          </div>
        </>
    );
}