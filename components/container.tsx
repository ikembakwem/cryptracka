export const Container = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="w-full mx-auto max-w-containerXs sm:max-w-containerSm md:max-w-containerMd lg:max-w-container lg:px-12">
      {children}
    </div>
  );
};
