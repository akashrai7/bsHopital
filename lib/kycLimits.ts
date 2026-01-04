export function canAttemptKyc(
  lastAttemptAt?: Date,
  totalAttempts: number = 0,
  maxAttempts: number = 3
) {
  if (!lastAttemptAt) {
    return { allowed: true, attemptsToday: 0 };
  }

  const last = new Date(lastAttemptAt);
  const now = new Date();

  const isSameDay =
    last.getFullYear() === now.getFullYear() &&
    last.getMonth() === now.getMonth() &&
    last.getDate() === now.getDate();

  if (!isSameDay) {
    return { allowed: true, attemptsToday: 0 };
  }

  if (totalAttempts >= maxAttempts) {
    return { allowed: false, attemptsToday: totalAttempts };
  }

  return { allowed: true, attemptsToday: totalAttempts };
}
