export const GET = async (req, res) => {
  const { name, email, password } = req.body();

  try {
    
  } catch (error) {
    return new Response("Failed to save in database", { status: 500 });
  }
};
