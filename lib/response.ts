// /lib/response.ts
export function success(message: string, data: any = {}) {
  return new Response(
    JSON.stringify({
      status: true,
      message,
      data,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}

export function error(
  message: string,
  errors: Record<string, string> | null = null,
  statusCode: number = 400
) {
  return new Response(
    JSON.stringify({
      status: false,
      message,
      errors,
    }),
    {
      status: statusCode,
      headers: { "Content-Type": "application/json" },
    }
  );
}
