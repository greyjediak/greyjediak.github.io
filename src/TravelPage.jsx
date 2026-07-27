import TravelCard from "./components/cards/TravelCard";
import PageContainer from "./components/layout/PageContainer";
import PageHeader from "./components/layout/PageHeader";
import { travels } from "./data/travels";

export default function TravelPage() {
  return (
    <PageContainer className="py-16 sm:py-24">
      <PageHeader
        eyebrow="Travel"
        title="Places I've wandered"
        description="Trips, coffee, museums, art, and engineering wonders."
        as="h1"
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {travels.map((travel) => (
          <TravelCard key={travel.id} travel={travel} />
        ))}
      </div>
    </PageContainer>
  );
}
