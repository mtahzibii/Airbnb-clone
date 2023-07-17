// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/pages/api/auth/[...nextauth]";

// export default async function getSession(req, res) {
//   try {
//     const session = await getServerSession({ req, options: authOptions });
//     res.status(200).json(session);
//   } catch (error) {
//     console.error("Error in getSession:", error);
//     res.status(500).json({ error: "Failed to retrieve session" });
//   }
// }
