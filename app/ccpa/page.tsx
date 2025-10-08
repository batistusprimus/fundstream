import { redirect } from 'next/navigation';

// Redirection de l'ancienne page CCPA vers la nouvelle page Privacy Choices
export default function CCPA() {
  redirect('/privacy-choices');
}
