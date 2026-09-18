export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="grid-bg absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,black,transparent)]" />
      <div className="animate-blob absolute -top-32 left-[15%] h-96 w-96 rounded-full bg-accent/25 blur-3xl" />
      <div className="animate-blob absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-accent-2/20 blur-3xl [animation-delay:-5s]" />
      <div className="animate-blob absolute -bottom-20 left-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl [animation-delay:-10s]" />
    </div>
  );
}