// /lib/utils.ts
export function generateParentUID() {
  const year = new Date().getFullYear().toString().slice(-2); // e.g., "25"
  const rnd = Math.floor(1000 + Math.random() * 9000); // 4 digits
  return `PAR${year}${rnd}`; // e.g., P259432
}

export function generateDoctorUID() {
  const year = new Date().getFullYear().toString().slice(-2); // e.g., "25"
  const rnd = Math.floor(1000 + Math.random() * 9000); // 4 digits
  return `DOC${year}${rnd}`; // e.g., P259432
}
