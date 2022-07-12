// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  manual_sig_handle?: string;
  pid: number;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    manual_sig_handle: process.env.NEXT_MANUAL_SIG_HANDLE,
    pid: process.pid
  });
}
