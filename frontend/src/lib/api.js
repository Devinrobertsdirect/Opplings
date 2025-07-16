import axios from 'axios';

export async function claimOppling(qrUuid, userId) {
  // Placeholder: call backend claim endpoint
  const res = await axios.post(`/api/claim/${qrUuid}`, { user_id: userId });
  return res.data;
} 