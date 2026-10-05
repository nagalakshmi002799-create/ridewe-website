export function PageTransitionLoader() {
  return (
    <div
      aria-label="Loading destination page"
      className="page-transition-loader"
      role="status"
    >
      <span aria-hidden="true" className="page-transition-loader-progress" />
    </div>
  );
}
