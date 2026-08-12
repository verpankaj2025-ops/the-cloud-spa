import { HomepageClientContainer } from '../components/homepage/HomepageClientContainer';

export const revalidate = 3600; // Incremental Static Regeneration (1 hour)

export default function HomePage() {
  return <HomepageClientContainer />;
}
