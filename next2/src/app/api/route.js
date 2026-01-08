export const feedback = [
  { id: 1, message: "tasty food." },
  { id: 2, message: "nice food." },
];

export async function GET(request) {
  return Response.json({
    status: 200,
    message: "yu.. get api",
  });
}
