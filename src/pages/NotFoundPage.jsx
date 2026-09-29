import { Link } from "react-router-dom";
import { Button } from "../components/ui/button.jsx";
import { Container } from "../components/layout/Container.jsx";
import { Section } from "../components/layout/Section.jsx";

export function NotFoundPage() {
  return (
    <Section className="flex min-h-[60vh] items-center">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
          Page not found
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          We couldn&apos;t find that page.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">
          The link may be outdated, or the page may not be available yet.
        </p>
        <Button asChild className="mt-7">
          <Link to="/">Return to RideWe</Link>
        </Button>
      </Container>
    </Section>
  );
}
