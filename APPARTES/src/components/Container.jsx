export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-[1120px] px-10 max-[560px]:px-[22px] ${className}`}>
      {children}
    </div>
  );
}
