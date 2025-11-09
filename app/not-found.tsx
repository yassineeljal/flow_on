import { redirect } from 'next/navigation';

export default function NotFound() {
  // Rediriger vers la page 404 en français par défaut
  redirect('/fr');
}
