// import { getSession } from "./getSession";
// import prismaClient from "../libs/prismadb";

// export default async function getCurrentUser(req, res) {
//   try {
//     const session = await getSession(req);

//     if (!session?.user?.email) {
//       return res.status(401).json({ error: "Unauthorized" });
//     }

//     const currentUser = await prismaClient.user.findUnique({
//       where: {
//         email: session.user.email,
//       },
//     });

//     if (!currentUser) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     const formattedUser = {
//       ...currentUser,
//       createdAt: currentUser.createdAt.toISOString(),
//       updatedAt: currentUser.updatedAt.toISOString(),
//       emailVerified: currentUser.emailVerified?.toISOString() || null,
//     };

//     res.status(200).json(formattedUser);
//   } catch (error) {
//     console.error("Error in getCurrentUser:", error);
//     res.status(500).json({ error: "Failed to retrieve current user" });
//   }
// }
