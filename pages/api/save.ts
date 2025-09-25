import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/db";
import type { RowDataPacket } from "mysql2";

// กำหนด type ให้ตรงกับตาราง number_value
interface NumberValueRow extends RowDataPacket {
  id: number;
  value: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { value } = JSON.parse(req.body) as { value: number };

      await db.query("UPDATE number_value SET value = ? WHERE id = 1", [value]);

      return res.status(200).json({ message: "อัปเดตข้อมูลสำเร็จ" });
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "เกิดข้อผิดพลาดบางอย่าง";
      return res.status(500).json({ message: errorMessage });
    }
  } else if (req.method === "GET") {
    try {
      const [rows] = await db.query<NumberValueRow[]>(
        "SELECT * FROM number_value WHERE id = 1"
      );

      const row = rows[0] ?? null;

      return res.status(200).json(row);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "เกิดข้อผิดพลาดบางอย่าง";
      return res.status(500).json({ message: errorMessage });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
