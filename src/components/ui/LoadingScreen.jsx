const rideweLogo = `${import.meta.env.BASE_URL}brand/ridewe-logo-horizontal.png`;

export function LoadingScreen() {
  return (
    <div
      aria-busy="true"
      aria-label="Loading RideWe"
      className="ridewe-loading-screen"
      role="status"
    >
      <div className="ridewe-loading-content">
        <img
          alt="RideWe Tours & Travels"
          className="ridewe-loading-logo"
          height="136"
          src={rideweLogo}
          width="384"
        />
        <p className="ridewe-loading-tagline">
          Ride Together for Better Experiences.
        </p>
        <div aria-hidden="true" className="ridewe-loading-track">
          <span className="ridewe-loading-progress" />
        </div>
      </div>
    </div>
  );
}